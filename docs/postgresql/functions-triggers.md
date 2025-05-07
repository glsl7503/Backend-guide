---
sidebar_position: 5
---

# 함수와 트리거

### 🧑‍💻 **함수 (Function)**

- **함수**는 특정 작업을 수행하는 코드 블록으로, 재사용 가능하고 입력값에 따라 결과를 반환.
- PostgreSQL에서는 **PL/pgSQL**을 사용하여 함수 작성 가능.

---

### 🛠️ **함수 생성**

- **기본 문법**
    
    ```sql
    CREATE FUNCTION function_name (parameters)
    RETURNS return_type AS
    $$
    BEGIN
      -- 함수 본문
    END;
    $$ LANGUAGE plpgsql;
    ```
    
- **예시**
    
    ```sql
    CREATE FUNCTION add_numbers(a INT, b INT)
    RETURNS INT AS
    $$
    BEGIN
      RETURN a + b;
    END;
    $$ LANGUAGE plpgsql;
    ```
    
- **함수 호출**
    
    ```sql
    SELECT add_numbers(5, 10);  -- 결과: 15
    ```
    

---

### 🔄 **함수의 종류**

- **트랜잭션 함수**: 트랜잭션에 영향을 미치는 함수.
- **집합 함수**: 결과를 집합으로 반환.
- **집합 함수** 예시:
    
    ```sql
    CREATE FUNCTION get_employees() RETURNS SETOF employees AS
    $$
    BEGIN
      RETURN QUERY SELECT * FROM employees;
    END;
    $$ LANGUAGE plpgsql;
    ```
    

---

### 🎯 **트리거 (Trigger)**

- **트리거**는 특정 이벤트가 발생할 때 자동으로 실행되는 함수.
- 데이터베이스에서 **INSERT**, **UPDATE**, **DELETE** 등의 이벤트에 반응.

---

### 🧩 **트리거 생성**

- **기본 문법**
    
    ```sql
    CREATE TRIGGER trigger_name
    { BEFORE | AFTER } { INSERT | UPDATE | DELETE }
    ON table_name
    FOR EACH ROW
    EXECUTE FUNCTION function_name();
    ```
    
- **예시**
    
    ```sql
    CREATE FUNCTION log_insert() RETURNS trigger AS
    $$
    BEGIN
      INSERT INTO log_table (action, time)
      VALUES ('INSERT', NOW());
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    
    CREATE TRIGGER trigger_log_insert
    AFTER INSERT ON my_table
    FOR EACH ROW
    EXECUTE FUNCTION log_insert();
    ```
    

---

### 🚨 **트리거 이벤트 종류**

1. **BEFORE**: 데이터가 변경되기 전에 트리거 실행.
2. **AFTER**: 데이터가 변경된 후 트리거 실행.
3. **INSTEAD OF**: 기존 이벤트를 대신하여 트리거 실행 (주로 뷰에서 사용).

---

### 📅 **트리거의 활용 예**

- **자동 로그 기록**: 데이터 변경 시 자동으로 로그를 기록.
- **값 검증**: 데이터가 삽입되기 전에 특정 조건을 체크하여 유효성 검사.
- **자동 계산**: 업데이트 시 특정 컬럼을 자동으로 계산하여 업데이트.

---

### 💡 **주의사항**

- **성능**: 트리거는 자동으로 실행되기 때문에 성능에 영향을 미칠 수 있음.
- **디버깅**: 트리거에서 오류가 발생하면 문제를 추적하기 어려울 수 있으므로, 로그나 디버깅 도구 사용을 고려.
- **트리거의 순서**: 트리거의 실행 순서가 중요할 수 있음 (예: BEFORE와 AFTER 트리거).