---
sidebar_position: 8
---

# 고급 기능

---
## **🔹 1. 인덱스 (Indexes)**

### **1.1 인덱스란?**

- **설명**: 테이블에서 데이터를 빠르게 검색할 수 있도록 도와주는 데이터 구조.
- **종류**:
    - **단일 인덱스**: 하나의 컬럼에 대한 인덱스.
    - **복합 인덱스**: 여러 컬럼을 묶은 인덱스.
    - **유니크 인덱스**: 값이 중복될 수 없는 인덱스.
    - **전체 텍스트 인덱스**: 텍스트 검색을 최적화하는 인덱스.

### **1.2 인덱스 사용 예시**

```sql
CREATE INDEX idx_name ON table_name (column_name);      -- 인덱스 생성
SHOW INDEX FROM table_name                              -- 인덱스 조회
DROP INDEX IDX_NAME ON ACCOUNT                          -- 인덱스 삭제
```

---

## **🔹 2. 파티셔닝 (Partitioning)**

### **2.1 파티셔닝이란?**

- **설명**: 대용량 테이블을 물리적으로 나누어 데이터 관리를 쉽게 하는 기법.
- **장점**: 성능 향상, 관리 용이성.
- **종류**:
    - **범위 파티셔닝**: 특정 범위의 데이터를 분리.
    - **리스트 파티셔닝**: 정해진 값에 따라 분리.
    - **해시 파티셔닝**: 데이터가 고르게 분배되도록 해시 함수 사용.
    - **키 파티셔닝**: 자동으로 분배되는 방식.

### **2.2 파티셔닝 사용 예시**

```sql
CREATE TABLE table_name (
    id INT,
    name VARCHAR(100)
)
PARTITION BY RANGE (id) (
    PARTITION p0 VALUES LESS THAN (10),
    PARTITION p1 VALUES LESS THAN (20)
);
```

---

## **🔹 3. 트리거 (Triggers)**

### **3.1 트리거란?**

- **설명**: 특정 이벤트(INSERT, UPDATE, DELETE)에 자동으로 실행되는 SQL 명령어.
- **사용 예시**:
    - **BEFORE**: 이벤트 발생 전에 실행.
    - **AFTER**: 이벤트 발생 후에 실행.

### **3.2 트리거 사용 예시**

```sql
CREATE TRIGGER trigger_name
AFTER INSERT ON table_name
FOR EACH ROW
BEGIN
    UPDATE table_name SET column_name = value WHERE condition;
END;
```

---

## **🔹 4. 저장 프로시저 (Stored Procedures)**

### **4.1 저장 프로시저란?**

- **설명**: MySQL에서 자주 사용하는 쿼리들을 저장해놓고, 재사용할 수 있도록 하는 기능.
- **장점**: 코드 재사용성 증가, 성능 향상.
- **사용 예시**:

```sql
DELIMITER //
CREATE PROCEDURE procedure_name()
BEGIN
    SELECT * FROM table_name;
END;
//
DELIMITER ;
```

---

## **🔹 5. 뷰 (Views)**

### **5.1 뷰란?**

- **설명**: 복잡한 쿼리를 미리 정의하여 가상의 테이블로 사용하는 기능.
- **장점**: 코드 재사용성, 쿼리 간결화.
- **사용 예시**:

```sql
CREATE VIEW view_name AS
SELECT column1, column2 FROM table_name;
```

---

## **🔹 6. 외래 키 (Foreign Keys)**

### **6.1 외래 키란?**

- **설명**: 두 테이블 간의 관계를 정의하고, 데이터 무결성을 보장하는 키.
- **장점**: 참조 무결성 보장.
- **사용 예시**:

```sql
CREATE TABLE table_name (
    id INT PRIMARY KEY,
    other_table_id INT,
    FOREIGN KEY (other_table_id) REFERENCES other_table(id)
);
```

---

## **🔹 7. 샤딩 (Sharding)**

### **7.1 샤딩이란?**

- **설명**: 대규모 데이터베이스를 여러 개의 서버에 분산시켜 성능을 향상시키는 기법.
- **장점**: 데이터 처리 성능 개선.
- **방법**: 데이터의 특정 컬럼을 기준으로 나누어 저장.

---

## **🔹 8. 복제 (Replication)**

### **8.1 복제란?**

- **설명**: MySQL 서버 간에 데이터를 복제하여 가용성을 높이고 부하 분산을 구현.
- **종류**:
    - **마스터-슬레이브 복제**: 한 서버가 마스터 역할을 하고 다른 서버들이 슬레이브 역할을 함.
    - **멀티-마스터 복제**: 여러 서버가 마스터 역할을 함.

---

## **📌 요약**

- **인덱스**: 쿼리 성능 향상을 위한 필수적인 기능.
- **파티셔닝**: 대규모 데이터베이스에서 성능 최적화.
- **트리거**: 이벤트 기반의 자동화 작업.
- **저장 프로시저**: 쿼리의 재사용성과 성능을 높여주는 기능.
- **뷰**: 복잡한 쿼리를 간단하게 처리.
- **외래 키**: 데이터 무결성 보장.
- **샤딩**: 대규모 데이터베이스 성능 개선.
- **복제**: 가용성 향상 및 부하 분산.

---