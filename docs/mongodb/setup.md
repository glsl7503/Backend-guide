---
sidebar_position: 2
---

# MongoDB 설치

## 🖥️ MongoDB 설치 방법

MongoDB는 **Windows**, **macOS**, **Linux**에서 설치할 수 있습니다.

---

### 💡 Windows에서 MongoDB 설치

1. **MongoDB 다운로드**
    - [MongoDB 다운로드 페이지](https://www.mongodb.com/try/download/community)에서 Windows 버전을 다운로드합니다.
2. **설치 파일 실행**
    - 다운로드한 `.msi` 파일을 실행하여 설치 마법사를 따릅니다.
    - 기본 설정으로 설치하면 **MongoDB**가 `C:\Program Files\MongoDB\Server\<버전>\bin` 경로에 설치됩니다.
3. **환경 변수 설정**
    - `bin` 폴더 경로 (`C:\Program Files\MongoDB\Server\<버전>\bin`)를 **환경 변수**에 추가하여, 명령어 `mongosh`와 `mongod`를 어디서든 사용할 수 있게 합니다.
4. **MongoDB 실행**
    - 명령 프롬프트에서 `mongod`를 입력하여 MongoDB 서버를 실행합니다.
    - 새로운 터미널에서 `mongosh`를 입력하여 클라이언트에 접속합니다.

---

### 🍏 macOS에서 MongoDB 설치

1. **Homebrew 설치**
    - `brew`를 통해 MongoDB를 설치할 수 있습니다. Homebrew가 설치되어 있지 않다면 먼저 [Homebrew 공식 사이트](https://brew.sh/)에서 설치합니다.
2. **MongoDB 설치**
    - 터미널에서 다음 명령어를 입력하여 MongoDB를 설치합니다.
        
        ```bash
        brew tap mongodb/brew
        brew install mongodb-community
        ```
        
3. **MongoDB 실행**
    - MongoDB 서비스를 실행하려면 아래 명령어를 입력합니다.
        
        ```bash
        brew services start mongodb/brew/mongodb-community
        ```
        
4. **MongoDB 클라이언트 접속**
    - `mongosh` 명령어를 입력하여 MongoDB 클라이언트에 접속합니다.

---

### 🐧 Linux에서 MongoDB 설치

1. **패키지 관리자 사용 (Ubuntu 예시)**
    - MongoDB 공식 저장소를 추가합니다.
        
        ```bash
        sudo apt-get install -y gnupg
        sudo wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
        sudo echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
        ```
        
2. **MongoDB 설치**
    
    ```bash
    sudo apt-get update
    sudo apt-get install -y mongodb-org
    ```
    
3. **MongoDB 실행**
    - MongoDB 서비스를 시작합니다.
        
        ```bash
        sudo systemctl start mongod
        sudo systemctl enable mongod
        ```
        
4. **MongoDB 클라이언트 접속**
    - `mongosh` 명령어로 클라이언트에 접속합니다.
        
        ```bash
        mongosh
        ```

---

### ⚙️ MongoDB 서비스 관리

- **서비스 시작**: `mongod` 명령어로 서버 시작.
- **서비스 중지**: `mongod --shutdown`으로 서버 종료.
- **자동 시작 설정**: 각 운영체제에서 MongoDB 서비스를 자동으로 시작하도록 설정할 수 있습니다.

---

### ⚠️ 보안 설정 (운영 환경 시 권장)

MongoDB는 기본 설치 시 인증 없이 실행되므로, 운영 환경에서는 반드시 **보안 설정**을 해주어야 합니다.
