---
sidebar_position: 4
---

# 트랜잭션과 락

### 🔄 **트랜잭션 관리**

- **트랜잭션**은 데이터베이스에서 수행되는 하나의 논리적 작업 단위.
- 트랜잭션은 **ACID** 원칙을 따름:
    - **Atomicity**: 트랜잭션 내의 모든 작업은 원자적으로 처리됨.
    - **Consistency**: 트랜잭션 실행 전후, 데이터베이스는 일관된 상태를 유지.
    - **Isolation**: 트랜잭션은 서로 독립적으로 수행됨.
    - **Durability**: 트랜잭션이 완료되면 그 결과는 영구적으로 저장됨.

---

### 💼 **트랜잭션 제어 명령어**

- **BEGIN**: 트랜잭션 시작.
- **COMMIT**: 트랜잭션 완료 및 변경 사항을 데이터베이스에 반영.
- **ROLLBACK**: 트랜잭션을 취소하고 변경 사항을 되돌림.

---

### ⚖️ **트랜잭션 격리 수준**

트랜잭션 격리 수준은 데이터의 일관성을 유지하면서도 동시에 발생하는 트랜잭션들을 처리하는 방법.

1. **Read Uncommitted**: 다른 트랜잭션에서 변경된 데이터를 볼 수 있음 (Dirty Read).
2. **Read Committed**: 커밋된 데이터만 읽을 수 있음, 하지만 여전히 다른 트랜잭션의 커밋을 볼 수 있음.
3. **Repeatable Read**: 트랜잭션 내에서 동일한 데이터를 두 번 읽어도 결과가 같음 (Phantom Read 방지).
4. **Serializable**: 가장 높은 격리 수준, 트랜잭션들이 순차적으로 처리된 것처럼 동작.

---

### 🔐 **락 (Lock)**

- 락은 데이터베이스에서 동시에 발생하는 트랜잭션을 관리하기 위한 메커니즘.
- 락을 사용하여 **데이터 충돌**을 방지하고 트랜잭션을 안전하게 처리.

---

### 🛑 **락 종류**

1. **공유 락 (Shared Lock)**: 다른 트랜잭션이 데이터를 읽을 수 있지만, 수정은 불가능.
2. **배타 락 (Exclusive Lock)**: 해당 데이터에 대해 다른 트랜잭션의 읽기/쓰기를 막음.

### ⚙️ **자동 락**

- PostgreSQL은 **행 레벨 락**을 사용하여 데이터 충돌을 방지.
- 기본적으로 SELECT는 **공유 락**을, UPDATE와 DELETE는 **배타 락**을 사용.

---

### 🧳 **락 모드와 상황**

1. **행 레벨 락 (Row-Level Lock)**: 특정 행에 대해서만 락을 걸 수 있어 다중 트랜잭션이 동시에 처리 가능.
2. **테이블 레벨 락 (Table-Level Lock)**: 전체 테이블에 락을 걸어 다른 트랜잭션이 접근할 수 없게 함.

---

### 🔄 **데드락 (Deadlock)**

- **데드락**은 두 개 이상의 트랜잭션이 서로의 락을 기다리며 영원히 기다리는 상황을 말함.
- **해결 방법**: PostgreSQL은 자동으로 데드락을 감지하고, 트랜잭션 중 하나를 롤백하여 해결함.

---

### 💡 **트랜잭션과 락 최적화 팁**

- **최소화된 트랜잭션 범위**: 트랜잭션 내에서 최소한의 작업을 수행하여 락 시간이 짧아지도록 함.
- **락 순서 통일**: 여러 트랜잭션이 동시에 락을 걸 때 동일한 순서로 락을 걸면 데드락을 방지할 수 있음.
- **타임아웃 설정**: 트랜잭션 타임아웃을 설정하여 오랜 시간 동안 락을 기다리는 문제를 방지.