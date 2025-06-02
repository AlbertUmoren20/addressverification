import java.time.LocalDateTime;

import com.example.AddVerification_Backend.VerificationStatus;

import lombok.Data;

@Data
public class VerificationDTO {
     private String requestId;
    private String name;
    private String phone;
    private VerificationStatus status;
    private LocalDateTime completedAt;
    private LocalDateTime requestedAt;
}
