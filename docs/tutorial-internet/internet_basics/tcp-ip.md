---
sidebar_position: 6
---

# TCP/IP 프로토콜

<aside>

### **TCP/IP란?**

TCP/IP는 인터넷에서 데이터를 전송하는 두 가지 핵심 프로토콜의 조합으로, 현대 인터넷 통신의 **기본 체계**를 제공합니다:

- **TCP (Transmission Control Protocol, 전송 제어 프로토콜)**
- **IP (Internet Protocol, 인터넷 프로토콜)**

이 두 프로토콜은 함께 작동하여 데이터를 정확하고 신뢰성 있게 전송합니다.

</aside>

---

### 🔑 **TCP: 데이터의 신뢰성 보장**

TCP는 데이터를 목적지까지 **정확히 전달**하는 것을 책임집니다.

### 주요 기능:

1. **🛡️ 정확한 전달 보장**
    - 데이터가 손실되지 않고, **순서에 맞게 도착**하도록 확인합니다.
2. **🔄 손실된 패킷 재전송**
    - 전송 중 손실된 패킷을 **재요청**하여 복구합니다.
3. **📊 데이터 흐름 및 혼잡 제어**
    - 네트워크 상태를 모니터링하며, **데이터 전송 속도**를 조정합니다.
    - 과도한 트래픽으로 인한 **혼잡**을 방지합니다.

---

### 🗺️ **IP: 데이터 전송의 길잡이**

IP는 데이터를 **패킷**으로 나누고, 이를 목적지 IP 주소로 전송합니다.

### 주요 기능:

1. **📦 데이터 패킷화**
    - 데이터를 패킷 으로 나눠 전송합니다.
2. **🚦 라우팅 및 주소 지정**
    - 각 패킷에 **발신지와 목적지 IP 주소**를 부여합니다.
    - 최적의 경로를 찾아 패킷을 전달합니다.

---

### 🤝 **TCP와 IP의 협력**

- **IP**는 데이터 패킷의 전송을 담당하며,
- **TCP**는 전송된 데이터가 **정확히 전달되었는지 확인**합니다.

이러한 협업으로 인터넷은 신뢰성과 효율성을 모두 갖춘 데이터 통신이 가능해집니다.

---

### 🛠️ **TCP/IP의 작동 과정**

1. **데이터 준비**
    - 전송할 데이터를 TCP가 패킷 단위로 분할하고, 순서를 지정합니다.
2. **패킷 전송**
    - IP가 각 패킷에 발신지와 목적지 주소를 추가하고 네트워크를 통해 전달합니다.
3. **데이터 도착**
    - 목적지에서 TCP가 패킷을 다시 조립하여 **원본 데이터**로 복원합니다.
4. **손실 복구**
    - 손실된 패킷이 있으면 TCP가 이를 감지하고, 재요청하여 복구합니다.

---

### 🌟 **TCP/IP의 장점**

1. **📈 신뢰성**
    - 데이터 전송 중 오류를 자동으로 감지 및 복구.
2. **🌍 호환성**
    - 다양한 네트워크 장치와 통신 가능.
3. **🔧 유연성**
    - 인터넷뿐만 아니라 로컬 네트워크에서도 동작.

---

### ⚠️ **한계점**

1. **속도 저하**
    - TCP의 재전송과 흐름 제어로 인해 **지연 시간**이 발생할 수 있습니다.
2. **보안 부족**
    - 기본적으로 데이터 암호화를 제공하지 않으므로 **HTTPS** 같은 보안 계층이 필요합니다.
3. **패킷 손실 가능성**
    - 네트워크가 혼잡하거나 연결 상태가 불안정할 경우 패킷 손실이 발생할 수 있습니다.

---

### 🌐 **TCP/IP가 사용하는 네트워크 계층**

| **계층** | **설명** | **예시** |
| --- | --- | --- |
| **응용 계층** | 사용자와 네트워크 간 상호작용을 지원 | HTTP, FTP, SMTP |
| **전송 계층** | 데이터 전송의 신뢰성을 보장 | TCP, UDP |
| **인터넷 계층** | 패킷을 목적지로 전달 | IP, ICMP |
| **네트워크 계층** | 실제 데이터 전송을 위한 물리적 연결 제공 | 이더넷, Wi-Fi |

---

### 💡 **마무리**

TCP/IP는 현대 인터넷의 기반이 되는 핵심 기술로, 우리가 사용하는 웹, 이메일, 스트리밍 등 모든 서비스의 **통신 표준**입니다.

이 조합 덕분에 인터넷은 신뢰성과 효율성을 갖춘 글로벌 네트워크로 자리 잡을 수 있었습니다. 🌟