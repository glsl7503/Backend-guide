---
sidebar_position: 4
---

# 성능 최적화

<aside>
💡

효율적인 데이터베이스 관리는 성능 최적화에서 핵심입니다. **MySQL**에서 성능을 높이기 위해 고려해야 할 주요 전략과 기법들을 아래와 같이 정리했습니다.

</aside>

---

### 1. **인덱스(Index) 사용**

- **인덱스**는 데이터 검색 속도를 높이는 데 필수적입니다.특히, **WHERE 절**, **JOIN**, **ORDER BY** 구문에서 성능 향상이 눈에 띕니다.

### ✅ **유형**

- **B-Tree 인덱스**: 범위 검색과 일반적인 조건 검색에 적합.
- **해시 인덱스**: 고유 키 검색에 적합 (메모리 테이블에서 주로 사용).

### ✅ **주의사항**

- 너무 많은 인덱스는 추가적인 디스크 사용과 쓰기 작업 성능 저하를 유발합니다.

```sql
CREATE INDEX idx_column_name ON table_name(column_name);
```

---

### 2. **쿼리 최적화(Query Optimization)**

- 쿼리를 효율적으로 작성하여 불필요한 데이터 처리를 최소화합니다.

### ✅ **팁**

- **`SELECT *`** 사용을 지양하고 필요한 컬럼만 선택.
- **하위 쿼리(Subquery)** 대신 **JOIN** 사용.
- **LIMIT**를 활용하여 결과를 제한.

---

### 3. **캐싱(Caching) 활용**

- 자주 사용되는 데이터나 쿼리 결과를 캐싱하여 데이터베이스 부하를 줄입니다.

### ✅ **기법**

- **Query Cache**: 동일한 쿼리의 결과를 캐싱.
- **Redis, Memcached**: 외부 캐시 시스템 활용.

---

### 4. **정규화와 비정규화**

- **정규화(Normalization)**: 데이터 중복을 제거하고 구조를 최적화.
- **비정규화(Denormalization)**: 읽기 성능 향상을 위해 데이터 중복을 허용.

### ✅ **적용 사례**

- 데이터 일관성이 중요하면 **정규화**.
- 읽기 성능이 중요하면 **비정규화**.

---

### 5. **분할(Partitioning)**

- 테이블을 논리적으로 나누어 데이터를 분리 관리하여 성능을 개선합니다.

### ✅ **유형**

- **범위 파티셔닝**: 특정 값 범위로 분리.
- **리스트 파티셔닝**: 특정 값에 따라 분리.

```sql
CREATE TABLE sales (
    id INT,
    sale_date DATE,
    amount DECIMAL(10, 2)
)
PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p1 VALUES LESS THAN (2020),
    PARTITION p2 VALUES LESS THAN (2023)
);
```

---

### 6. **데이터베이스 설계 최적화**

- 스키마 설계를 단순화하고, 필요한 데이터를 효율적으로 저장.

### ✅ **팁**

- 적절한 데이터 타입 선택 (예: `TINYINT`, `VARCHAR`).
- 외래 키 제약(Foreign Key Constraints) 최소화.

---

### 7. **제한적 락(Locking)**

- 과도한 **락(Lock)** 사용을 방지하여 동시성(Concurrency) 문제를 해결.

### ✅ **방법**

- **Row-Level Locking**: 전체 테이블이 아닌 특정 행만 잠금.
- **Deadlock** 방지를 위해 트랜잭션을 짧게 유지.

---

### 8. **모니터링 및 튜닝**

- **Slow Query Log**를 활성화하여 성능이 느린 쿼리를 분석.
- MySQL **EXPLAIN**을 사용해 실행 계획을 점검.

```sql
EXPLAIN SELECT * FROM orders WHERE customer_id = 1;
```

---

### 9. **하드웨어 활용**

- 충분한 CPU, RAM, 디스크 속도로 MySQL 성능을 높일 수 있습니다.
- **SSD**를 사용하면 I/O 성능이 대폭 향상됩니다.

---

### 📌 **정리**

- MySQL 성능 최적화는 **인덱스 관리**, **쿼리 구조 개선**, **캐싱 사용** 등을 통해 데이터베이스의 효율성을 극대화하는 작업입니다.
- 모니터링 도구를 활용하여 성능 병목 구간을 파악하고, 필요한 최적화 기법을 적용하세요.