---
sidebar_position: 3
---

# 기본 사용법

## 🧐 MongoDB 기본 명령어

MongoDB는 **문서(Document) 기반 데이터베이스**로, JSON과 유사한 **BSON(Binary JSON)** 형식으로 데이터를 저장하고 관리합니다. 여기서는 MongoDB의 **기본 CRUD 연산**과 **Aggregation**을 다룹니다.

---

### 🔹 데이터베이스 & 컬렉션

#### 📌 **데이터베이스 선택 및 생성**

- `use myDatabase` → 데이터베이스 선택 (없으면 자동 생성)

#### 📌 **컬렉션 생성**

- `db.createCollection("users")` → 명시적 생성 (필수 아님, 데이터 삽입 시 자동 생성됨)

---

### 🔹 CRUD (Create, Read, Update, Delete)

#### 🟢 **데이터 삽입 (Create)**

- `db.users.insertOne({ name: "Alice", age: 25 })` → 단일 문서 삽입
- `db.users.insertMany([{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }])` → 여러 문서 삽입

#### 🔵 **데이터 조회 (Read)**

- `db.users.find()` → 모든 문서 조회
- `db.users.findOne({ name: "Alice" })` → 특정 문서 조회
- `db.users.find({ age: { $gt: 25 } })` → 조건부 조회 (`$gt`: 초과, `$lt`: 미만, `$eq`: 일치)

#### 🟠 **데이터 수정 (Update)**

- `db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })` → 하나의 문서 수정
- `db.users.updateMany({ age: { $gt: 30 } }, { $set: { status: "Senior" } })` → 여러 문서 수정

#### 🔴 **데이터 삭제 (Delete)**

- `db.users.deleteOne({ name: "Charlie" })` → 하나의 문서 삭제
- `db.users.deleteMany({ age: { $lt: 30 } })` → 여러 문서 삭제

---

### 🔹 Aggregation (집계 연산)

MongoDB는 단순한 CRUD 연산 외에도 **Aggregation Pipeline**을 사용하여 데이터를 그룹화하고 변형할 수 있습니다.

#### 📌 **Aggregation 주요 연산자**

- `$match` → 특정 조건으로 데이터 필터링
- `$group` → 특정 필드 기준으로 데이터 그룹화
- `$sort` → 정렬
- `$project` → 특정 필드만 선택하여 반환
- `$limit`, `$skip` → 페이징 처리

#### 📌 **Aggregation 예시**

- `db.users.aggregate([{ $match: { age: { $gt: 25 } } }])` → 25세 초과 데이터만 조회
- `db.users.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])` → `status` 별 데이터 개수 카운트
