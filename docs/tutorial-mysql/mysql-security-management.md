---
sidebar_position: 6
---

# 보안 관리

---

### 🚨 **1. 사용자 계정 관리**

- **최소 권한 원칙**: 필요한 최소 권한만 부여.
- **명령어**:
    - 계정 생성:
        
        ```sql
        CREATE USER 'username'@'host' IDENTIFIED BY 'password';
        ```
        
    - 권한 부여:
        
        ```sql
        GRANT SELECT, INSERT ON database_name.* TO 'username'@'host';
        ```
        
    - 권한 철회:
        
        ```sql
        REVOKE INSERT ON database_name.* FROM 'username'@'host';
        ```
        
    - 계정 삭제:
        
        ```sql
        DROP USER 'username'@'host';
        ```
        

---

### 🔑 **2. 비밀번호 정책 강화**

- **비밀번호 복잡성 설정**:
    
    ```sql
    SET GLOBAL validate_password_policy = 2;  -- 강력한 정책
    SET GLOBAL validate_password_length = 12; -- 최소 길이 12
    ```
    
    - **정책 옵션**:
        - `0`: 낮은 보안 (길이만 확인).
        - `1`: 중간 보안 (문자 조합 제한).
        - `2`: 강력한 보안 (숫자, 대소문자, 특수문자 포함).

---

### 🔒 **3. 데이터 암호화**

- **전송 데이터 암호화 (SSL/TLS)**:
    
    ```bash
    [mysqld]
    require_secure_transport = ON
    ```
    
- **저장 데이터 암호화**:InnoDB 테이블에서 사용.
    
    ```sql
    CREATE TABLE sensitive_data (
        id INT NOT NULL PRIMARY KEY,
        secret_info TEXT
    ) ENCRYPTION='Y';
    ```
    

---

### 🔐 **4. 접근 제어 및 방화벽 설정**

- **호스트 기반 접근 제한**:
    
    ```sql
    CREATE USER 'user'@'192.168.1.%' IDENTIFIED BY 'password';
    ```
    
- **방화벽 설정**:MySQL 포트(3306)에 대한 불필요한 접근 차단.

---

### 🛡️ **5. SQL Injection 방지**

- **준비된 쿼리 사용**:
    
    ```sql
    SELECT * FROM users WHERE username = ? AND password = ?;
    ```
    
- **입력 값 검증**: 사용자 입력값은 반드시 검증 및 필터링.

---

### 🗂️ **6. 로그 및 모니터링**

- **접속 기록 및 로그 활성화**:
    
    ```bash
    [mysqld]
    log-error = /var/log/mysql/error.log
    general_log = ON
    general_log_file = /var/log/mysql/general.log
    ```
    
- **Audit Plugin**:MySQL Enterprise Audit Plugin 사용.

---

### ⏫ **7. 최신 업데이트 유지**

- **보안 패치**: 최신 MySQL 버전을 사용하여 보안 취약점 방지.
- **정기 점검**: 계정, 권한, 로그 상태를 주기적으로 확인.

---

### 📌 **요약**

MySQL 보안을 유지하기 위해 사용자 계정 관리, 암호화, 접근 제어, SQL Injection 방지 등의 기술을 사용하며, **최신 보안 패치**를 유지하는 것이 중요합니다.

데이터베이스의 무결성과 안전성을 보장하기 위해 **최소 권한 원칙**과 **정기 점검**을 실천하세요!