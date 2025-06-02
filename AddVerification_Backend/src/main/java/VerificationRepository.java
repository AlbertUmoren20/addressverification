import org.springframework.data.jpa.repository.JpaRepository;

import com.example.AddVerification_Backend.AddressVerification;

public interface VerificationRepository extends JpaRepository<AddressVerification, String> {
}