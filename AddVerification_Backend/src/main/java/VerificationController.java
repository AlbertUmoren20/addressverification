import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.poifs.crypt.Decryptor;
import org.apache.poi.poifs.crypt.EncryptionInfo;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyProperties.AssertingParty.Verification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

// Ensure this import matches the actual package and class name of AddressVerification
import com.example.AddVerification_Backend.AddressVerification;
import com.example.AddVerification_Backend.VerificationStatus;

import java.io.IOException;
import java.io.InputStream;
import java.security.GeneralSecurityException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping("/api/upload")
public class VerificationController {

    private final VerificationRepository verificationRepository;

    public VerificationController(VerificationRepository verificationRepository) {
        this.verificationRepository = verificationRepository;
    }

    @PostMapping("/excel")
    public ResponseEntity<UploadResponse> uploadExcelData(@RequestParam("file") MultipartFile file) {
        List<AddressVerification> verifications = new ArrayList<>();
        Workbook workbook = null;
        InputStream inputStream = null;

        try {
            inputStream = file.getInputStream();
            workbook = new XSSFWorkbook(inputStream);
            Sheet sheet = workbook.getSheetAt(0);

            for (Row row : sheet) {
                // Skip header row
                if (row.getRowNum() == 0) continue;

                AddressVerification verification = new AddressVerification();

                verification.setRequestId(getStringValue(row.getCell(0))); // Column A
                verification.setName(getStringValue(row.getCell(1)));      // Column B
                verification.setPhone(getStringValue(row.getCell(2)));     // Column C
                verification.setStatus(VerificationStatus.valueOf(
                    getStringValue(row.getCell(3)).toUpperCase()));        // Column D
                verification.setCompletedAt(getDateTimeValue(row.getCell(4))); // Column E
                verification.setRequestedAt(
                    row.getCell(5) != null ? getDateTimeValue(row.getCell(5)) :
                    LocalDateTime.now());                                 // Column F

                verifications.add(verification);
            }

            List<AddressVerification> saved = verificationRepository.saveAll(verifications);
            return ResponseEntity.ok(new UploadResponse(
                "Uploaded " + saved.size() + " records successfully",
                saved.size()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new UploadResponse(
                "Failed to upload data: " + e.getMessage(),
                0
            ));
        } finally {
            try {
                if (workbook != null) {
                    workbook.close();
                }
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (Exception e) {
                System.err.println("Error closing resources: " + e.getMessage());
            }
        }
    }

    private String getStringValue(Cell cell) {
        if (cell == null) return null;
        switch (cell.getCellType()) {
            case STRING: return cell.getStringCellValue();
            case NUMERIC: return String.valueOf((int)cell.getNumericCellValue());
            default: return null;
        }
    }

    private LocalDateTime getDateTimeValue(Cell cell) {
        return cell != null ? cell.getLocalDateTimeCellValue() : null;
    }

    record UploadResponse(String message, int recordsProcessed) {}


    private Workbook openPasswordProtectedWorkbook(POIFSFileSystem poifs) throws IOException, GeneralSecurityException {
    EncryptionInfo info = new EncryptionInfo(poifs);
    Decryptor decryptor = Decryptor.getInstance(info);
    
    // Hardcoded password - change "yourpassword" to actual password
    if (!decryptor.verifyPassword("project1")) {
        throw new IOException("Incorrect password for Excel file");
    }
    
    try (InputStream dataStream = decryptor.getDataStream(poifs)) {
        return new XSSFWorkbook(dataStream);
    }
}
}