---
sidebar_position: 2
---

# 기본 쿼리

### 1. **기본 쿼리 생략**

- `SELECT`, `INSERT`, `DELETE`, `UPDATE`와 같은 **기본적인 SQL 명령어**는 생략합니다.

---

### 2. **조인 (JOIN)**

### 📋 **구문**:

```sql
SELECT column1, column2, ...
FROM table1
JOIN table2
ON table1.column_name = table2.column_name;
```

> 여러 테이블을 연결하여 복합적인 데이터를 조회할 수 있습니다.
> 

### 🔍 **조인 종류**:

- **INNER JOIN**: 두 테이블에서 **일치하는 데이터**만 조회.
- **LEFT JOIN**: 왼쪽 테이블의 **모든 데이터**와 오른쪽 테이블에서 일치하는 데이터 조회.
- **RIGHT JOIN**: 오른쪽 테이블의 **모든 데이터**와 왼쪽 테이블에서 일치하는 데이터 조회.
- **FULL JOIN**: 두 테이블의 **모든 데이터**를 조회.

---

### 3. **서브쿼리 (Subquery)**

### 📋 **구문**:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE column_name IN (SELECT column_name FROM table_name WHERE condition);
```

> 쿼리 안에 또 다른 쿼리를 포함시켜 복잡한 조건을 처리합니다.
> 

### 🔍 **서브쿼리 종류**:

- **단일 값 서브쿼리**: 하나의 값을 반환하여 조건으로 사용.
- **다중 값 서브쿼리**: 여러 값을 반환하여 조건으로 사용.
- **상관 서브쿼리**: 외부 쿼리와 관계를 맺고 결과를 반환.

---

### 4. **집합 연산자 (SET Operators)**

### 📋 **구문**:

```sql
SELECT column1, column2
FROM table1
UNION
SELECT column1, column2
FROM table2;
```

> 여러 SELECT 쿼리의 결과를 결합합니다.
> 

### 🔍 **연산자 종류**:

- **UNION**: **중복 제거** 후 두 SELECT 결과 결합.
- **UNION ALL**: **중복 포함**하여 두 SELECT 결과 결합.
- **INTERSECT**: 두 쿼리의 **공통된 데이터**만 반환.
- **EXCEPT**: 첫 번째 쿼리에서 두 번째 쿼리의 결과를 **제외**한 데이터만 반환.

---

### 5. **그룹화 및 집계 함수 (GROUP BY & Aggregates)**

### 📋 **구문**:

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1;
```

> 데이터를 그룹화하여 집계 함수와 함께 사용합니다.
> 

### 🔍 **집계 함수**:

- **COUNT()**: **행의 개수**를 셈.
- **SUM()**: **숫자 값을 더함**.
- **AVG()**: **숫자 값의 평균**을 계산.
- **MAX()**: 그룹 내에서 **최대값**을 반환.
- **MIN()**: 그룹 내에서 **최소값**을 반환.

---

### 6. **HAVING**

### 📋 **구문**:

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1
HAVING COUNT(*) > 5;
```

> GROUP BY로 그룹화된 데이터에 조건을 추가할 때 사용합니다.
> 
- **WHERE**는 그룹화 **전**, **HAVING**은 그룹화 **후** 조건을 적용합니다.

---

### 7. **윈도우 함수 (Window Functions)**

### 📋 **구문**:

```sql
SELECT column1, ROW_NUMBER() OVER (ORDER BY column2) AS row_num
FROM table_name;
```

> 그룹화 없이 데이터를 처리하여 순위나 이전/다음 값을 계산할 수 있습니다.
> 

### 🔍 **주요 윈도우 함수**:

- **ROW_NUMBER()**: 데이터를 **순위**대로 정렬.
- **RANK()**: 순위를 매기되 **동점 처리**.
- **DENSE_RANK()**: 동점 처리 시 **중간 번호 건너뛰지 않음**.
- **NTILE()**: 데이터를 **n개의 그룹**으로 나눔.

---

### 8. **CASE 문**

### 📋 **구문**:

```sql
SELECT column1,
    CASE
        WHEN condition THEN result
        ELSE result
    END AS new_column
FROM table_name;
```

> 조건에 맞는 값을 변환하거나 출력할 수 있는 조건문입니다.
>