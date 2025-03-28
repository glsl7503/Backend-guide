---
sidebar_position: 6
---

# 메모리 관리

## 🧠 메모리 관리 (Memory Management)

<aside>
💡

메모리 관리는 컴퓨터 시스템에서 프로그램이 필요로 하는 메모리를 **할당**하고 **해제**하는 과정을 포함하는 중요한 개념이다.

</aside>

### 1. 🗂️ 메모리 구조

- **주기억장치 (RAM)**:
    - 프로그램이 실행될 때 사용하는 **휘발성** 메모리.
- **보조기억장치**:
    - 영구적으로 데이터를 저장하는 장치 (예: 하드 드라이브, SSD).

---

### 2. 🛠️ 메모리 관리 기법

### 2.1 연속 메모리 할당 (Contiguous Memory Allocation)

- **정의**: 메모리를 연속적으로 할당하는 방법.
- **장점**: 관리가 쉽고 데이터 접근 속도가 빠름.
- **단점**: 메모리 단편화 발생 가능.

### 2.2 페이지 기반 메모리 관리 (Paging)

- **정의**: 프로세스를 일정한 크기의 페이지로 나누고 물리 메모리를 페이지 단위로 관리.
- **장점**: 메모리 단편화를 줄이고 다양한 크기의 프로세스를 효율적으로 관리.
- **단점**: 페이지 테이블 관리의 오버헤드 발생.

### 2.3 세그먼트 기반 메모리 관리 (Segmentation)

- **정의**: 프로세스를 논리적 세그먼트로 나누어 독립적으로 관리.
- **장점**: 프로그램의 논리적 구조를 반영하고 메모리를 유연하게 사용.
- **단점**: 세그먼트 단편화 발생 가능.

### 2.4 가상 메모리 (Virtual Memory)

- **정의**: 물리 메모리의 한계를 넘어서 프로그램이 실행될 수 있도록 하는 기술.
- **장점**: 큰 프로그램 실행 가능, 메모리의 효율성을 높임.
- **단점**: 하드 드라이브 접근 속도가 RAM보다 느려 성능 저하 발생.

---

### 3. ⚙️ 메모리 관리의 중요성

- **성능 최적화**: 애플리케이션의 성능을 극대화.
- **자원 관리**: 시스템 자원의 효율적인 사용.
- **안정성**: 메모리 누수나 충돌을 방지하여 안정적인 실행.

---