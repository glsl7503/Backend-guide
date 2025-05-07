---
sidebar_position: 2
---

# 데이터 타입

### 🏷️ **기본 데이터 타입**

- **정수형**: `smallint`, `integer`, `bigint`
    - 다양한 범위의 정수 값을 저장.
- **실수형**: `real`, `double precision`, `numeric`
    - 실수 값과 고정 소수점 값을 저장.
- **문자형**: `char`, `varchar`, `text`
    - 고정 길이 문자(`char`), 가변 길이 문자(`varchar`), 큰 텍스트(`text`).
- **불리언**: `boolean`
    - `TRUE`, `FALSE`, `NULL` 값을 저장.
- **날짜와 시간**: `date`, `time`, `timestamp`, `interval`
    - 날짜, 시간, 날짜+시간, 시간 간격을 저장.

---

### 🧮 **수치형 데이터**

- **정수형**
    - `smallint`: -32,768 ~ 32,767
    - `integer`: -2,147,483,648 ~ 2,147,483,647
    - `bigint`: -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807
- **실수형**
    - `real`: 단정도 실수 (4바이트)
    - `double precision`: 배정도 실수 (8바이트)
    - `numeric`: 정확한 소수점 계산이 필요한 경우 사용 (고정 소수점)

---

### 📝 **문자형 데이터**

- **`char(n)`**: 고정 길이 문자 (길이가 짧은 경우 여분의 공간을 공백으로 채움)
- **`varchar(n)`**: 가변 길이 문자 (최대 길이 제한)
- **`text`**: 가변 길이 문자, 크기 제한 없음

---

### 📅 **날짜와 시간**

- **`date`**: 날짜만 저장 (YYYY-MM-DD)
- **`time`**: 시간만 저장 (HH:MM:SS)
- **`timestamp`**: 날짜와 시간 저장 (YYYY-MM-DD HH:MM:SS)
- **`interval`**: 시간 간격 (e.g., '1 day', '3 hours 15 minutes')

---

### 🗃️ **특수 데이터 타입**

- **배열**: PostgreSQL은 배열 타입을 지원. 예: `integer[]`, `text[]`
    - 여러 값을 한 필드에 저장할 수 있음.
- **JSON/JSONB**: JSON 데이터 저장. `JSONB`는 이진 형식으로 저장되어 더 빠른 처리 성능 제공.
- **UUID**: 고유한 식별자를 저장하는 데이터 타입.
    - 예: `uuid` 타입은 고유한 값을 식별자로 사용.
- **ENUM**: 미리 정의된 값들 중 하나를 선택.
    - 예: `CREATE TYPE status AS ENUM ('active', 'inactive', 'pending')`

---

### 🌐 **기타 데이터 타입**

- **`bytea`**: 바이너리 데이터를 저장.
- **`jsonb`**: JSON 데이터 저장, `json`보다 더 효율적인 처리 성능 제공.
- **`cidr`, `inet`, `macaddr`**: IP 주소 및 MAC 주소 저장.