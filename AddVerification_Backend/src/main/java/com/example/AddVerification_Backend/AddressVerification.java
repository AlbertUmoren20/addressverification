package com.example.AddVerification_Backend;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Entity
public class AddressVerification {
    @Id
    @Setter
    private String requestId;
    private String name;
    private String phone;
    
    @Enumerated
    private VerificationStatus status;  // Verified, Unverified, Cancelled, Failed

    private LocalDateTime completedAt;
    private LocalDateTime requestedAt;
    public String getRequestId() {
        return requestId;
    }
    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public VerificationStatus getStatus() {
        return status;
    }
    public void setStatus(VerificationStatus status) {
        this.status = status;
    }
    public LocalDateTime getCompletedAt() {
        return completedAt;
    }
    public void setCompletedAt(LocalDateTime completedAt) {
        this.completedAt = completedAt;
    }
    public LocalDateTime getRequestedAt() {
        return requestedAt;
    }
    public void setRequestedAt(LocalDateTime requestedAt) {
        this.requestedAt = requestedAt;
    }

}
