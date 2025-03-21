---
sidebar_position: 2
---

# 설치 및 설정

### 📦 **1. MySQL 설치 방법**

<aside>
💡

MySQL은 다양한 운영 체제에서 설치할 수 있습니다. 아래는 각 운영 체제별 설치 방법입니다.
Windows LTS > 8.4.3

</aside>

### 🖥️ **Windows에서 MySQL 설치**

1. **MySQL 공식 웹사이트**([https://dev.mysql.com/downloads/installer/)에](https://dev.mysql.com/downloads/installer/)%EC%97%90) 접속합니다.
2. **MySQL Installer**를 다운로드합니다.
3. 다운로드한 설치 파일을 실행하고, **"Developer Default"** 설치 옵션을 선택합니다.
4. 설치 중에 MySQL 서버의 **root 비밀번호**를 설정합니다.
5. **MySQL Workbench**를 설치하여, MySQL을 관리할 수 있는 GUI 환경을 제공합니다.
6. 설치가 완료되면, **MySQL 서버**와 **MySQL Workbench**를 실행하여 연결을 확인합니다.

### 🍏 **macOS에서 MySQL 설치**

1. **Homebrew**를 사용하여 설치할 수 있습니다. Terminal에서 다음 명령어를 실행합니다:
    
    ```bash
    brew install mysql
    ```
    
2. 설치가 완료되면, MySQL 서버를 시작합니다:
    
    ```bash
    brew services start mysql
    ```
    
3. **MySQL 설치 확인**:
    
    ```bash
    mysql --version
    ```
    

### 🐧 **Linux에서 MySQL 설치**

1. **Ubuntu/Debian**:
    
    ```bash
    sudo apt-get update
    sudo apt-get install mysql-server
    ```
    
2. **CentOS/RHEL**:
    
    ```bash
    sudo yum install mysql-server
    ```
    
3. 설치가 완료되면, MySQL 서버를 시작합니다:
    
    ```bash
    sudo service mysql start
    ```
    
4. MySQL 서버가 정상적으로 시작되었는지 확인:
    
    ```bash
    sudo service mysql status
    ```
    

---

### ⚙️ **2. MySQL 초기 설정**

MySQL 설치 후, 초기 설정을 통해 보안을 강화하고, 시스템 환경을 최적화할 수 있습니다.

### 🔑 **root 비밀번호 설정**

설치 후, MySQL의 **root** 계정에 비밀번호를 설정하는 것이 중요합니다. 초기 설치 시 설정한 비밀번호를 기억하고 사용하세요.

```bash
mysql_secure_installation
```

위 명령어를 실행하면, root 비밀번호 설정, 불필요한 계정 삭제 등 보안 강화를 위한 여러 옵션을 설정할 수 있습니다.

### 📅 **MySQL 서버 시작 및 정지**

- **MySQL 서버 시작**:
    - Windows: MySQL Workbench에서 시작하거나, `services.msc`에서 MySQL 서비스를 시작합니다.
    - macOS/Linux: 아래 명령어로 MySQL 서버를 시작할 수 있습니다.
    
    ```bash
    sudo service mysql start
    ```
    
- **MySQL 서버 정지**:
    
    ```bash
    sudo service mysql stop
    ```
    

### 🛡️ **방화벽 설정 (필요시)**

MySQL 서버에 외부에서 접근하려면 방화벽에서 포트 3306을 열어야 합니다.

- **Ubuntu/Debian**에서 UFW로 포트 열기:
    
    ```bash
    sudo ufw allow 3306
    ```
    

---

### 🌐 **3. MySQL 서버 연결**

설치 후, MySQL 서버에 연결하여 데이터베이스를 관리할 수 있습니다.

### 👨‍💻 **MySQL CLI (Command Line Interface) 접속**

MySQL 서버에 접속하려면 `mysql` 명령어를 사용합니다. **root** 계정으로 접속하려면 아래와 같이 입력합니다:

```bash
mysql -u root -p
```

**root 비밀번호**를 입력하면 MySQL CLI로 접속됩니다.

### 💻 **MySQL Workbench 사용**

GUI 환경에서 MySQL을 관리하려면 **MySQL Workbench**를 설치하고, 서버 주소와 로그인 정보를 입력하여 연결합니다.

---

### 🔧 **4. MySQL 기본 설정 파일**

MySQL은 `my.cnf` 또는 `my.ini`라는 설정 파일을 통해 다양한 환경 설정을 할 수 있습니다. 기본적으로 이 파일은 MySQL 설치 디렉토리 내에 위치합니다.

- **주요 설정 항목**:
    - `bind-address`: MySQL 서버가 리스닝할 IP 주소를 설정합니다.
    - `max_connections`: 동시 접속할 수 있는 최대 클라이언트 수를 설정합니다.
    - `datadir`: 데이터 파일의 저장 위치를 설정합니다.

설정 파일을 수정한 후에는 MySQL 서버를 재시작해야 합니다.

---

### 📝 **5. MySQL 서비스 관리**

MySQL은 서비스 형태로 실행됩니다. 서비스 관리 명령어는 운영 체제에 따라 다릅니다.

### 🖥️ **Windows에서 MySQL 서비스 관리**

- **MySQL 서비스 시작**:
    - Windows 서비스 관리에서 MySQL을 찾아 **시작**을 클릭합니다.
- **MySQL 서비스 정지**:
    - 서비스 관리에서 MySQL을 찾아 **정지**를 클릭합니다.

### 🍏 **macOS/Linux에서 MySQL 서비스 관리**

- **서비스 시작**:
    
    ```bash
    sudo service mysql start
    ```
    
- **서비스 정지**:
    
    ```bash
    sudo service mysql stop
    ```
    
- **서비스 재시작**:
    
    ```bash
    sudo service mysql restart
    ```
    

---

### ⚡ **6. MySQL 기본 테스트**

설치와 설정이 완료되면, 기본적인 SQL 쿼리를 실행하여 MySQL이 정상적으로 작동하는지 확인할 수 있습니다.

1. **MySQL 접속 후, 데이터베이스 목록 확인**:
    
    ```sql
    SHOW DATABASES;
    ```
    
    ### 1️⃣ **`information_schema`**
    
    - **역할**: MySQL 서버의 메타데이터를 저장.
    - 테이블, 열(column), 사용자 권한, 데이터베이스 상태 등 MySQL 서버의 구조와 설정 정보를 포함.
    - 주로 **데이터베이스의 구조를 조회**하거나 관리할 때 사용.
    
    ### 2️⃣ **`mysql`**
    
    - **역할**: MySQL 서버의 핵심 데이터베이스.
    - **사용자 계정, 권한 정보, 시스템 설정** 등이 저장됨.
    - MySQL 서버가 실행될 때 이 데이터를 기반으로 작동.
    
    ### 주의:
    
    - `mysql` 데이터베이스의 데이터를 직접 수정하지 않는 것이 좋음.(권한 변경 등은 `GRANT` 명령을 통해 처리.)
    
    ### 3️⃣ **`performance_schema`**
    
    - **역할**: MySQL 서버의 성능 관련 데이터를 저장.
    - 쿼리 실행 시간, 리소스 사용량, 잠금(lock) 정보 등을 추적.
    - **성능 분석** 및 최적화를 위한 도구로 사용.
    
    ### 4️⃣ **`sys`**
    
    - **역할**: `performance_schema` 데이터를 좀 더 사용하기 쉽게 요약해서 제공.
    - MySQL 5.7 이후 도입된 시스템 데이터베이스.
    - 성능 모니터링을 위해 사전 정의된 뷰(View)와 함수(Function)를 제공.
    
2. **새로운 데이터베이스 생성**:
    
    ```sql
    CREATE DATABASE testdb;
    ```
    
3. **데이터베이스 확인**:
    
    ```sql
    USE testdb;  -- 이 데이터베이스를 쓰겠다는 명시적 명령어
    SHOW TABLES;
    ```