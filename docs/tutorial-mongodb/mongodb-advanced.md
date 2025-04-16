---
sidebar_position: 5
---

# 고급 기능

MongoDB는 **기본적인 CRUD 작업** 외에도 다양한 **고급 기능**을 제공하여 더욱 효율적이고 강력한 데이터 관리를 가능하게 합니다. 여기서는 **Aggregation**, **인덱싱**, **트랜잭션**, **Change Streams**와 같은 고급 기능들을 살펴봅니다.

---

### 🔍 Aggregation (집계)

Aggregation은 MongoDB에서 **데이터를 그룹화**하거나 **복잡한 연산**을 수행할 때 사용하는 기능입니다. 여러 데이터를 **처리하고 변환**하는 데 유용합니다.

### 🛠️ **Aggregation Pipeline**

- 여러 단계를 거쳐 데이터를 처리하는 **파이프라인** 구조
- 각 단계에서는 **필터링**, **그룹화**, **정렬** 등을 할 수 있습니다.
- 예시: `match`, `group`, `project` 등의 연산자를 사용하여 데이터를 변환

**예시: 특정 연령대의 사용자 수 구하기**

```bash
db.users.aggregate([
  { $match: { age: { $gte: 18, $lt: 30 } } },
  { $group: { _id: null, count: { $sum: 1 } } }
])
```

---

### ⚡ 인덱싱 (Indexing)

인덱스는 데이터를 더 빠르게 조회할 수 있게 도와줍니다. MongoDB는 **기본 인덱스** 외에도 **복합 인덱스**, **텍스트 인덱스** 등 다양한 인덱스를 지원합니다.

### 🛠️ **기본 인덱스**

- `_id` 필드에 기본 인덱스가 자동 생성됩니다.

### 🏷️ **복합 인덱스**

- 여러 필드를 결합하여 인덱스를 생성할 수 있습니다.

**예시: 이름과 나이에 대한 복합 인덱스 생성**

```bash
db.users.createIndex({ name: 1, age: -1 })
```

### 🔍 **텍스트 인덱스**

- 텍스트 검색을 최적화하는 인덱스

**예시: 텍스트 인덱스 생성**

```bash
db.articles.createIndex({ content: "text" })
```

---

### 🔄 트랜잭션 (Transactions)

MongoDB는 **트랜잭션**을 통해 여러 연산을 **원자적**으로 수행할 수 있습니다. ACID 특성을 준수하여 데이터의 일관성을 보장합니다.

### 🛠️ **트랜잭션 사용법**

- **트랜잭션 시작**: `startSession()`
- **트랜잭션 커밋**: `commitTransaction()`
- **트랜잭션 롤백**: `abortTransaction()`

**예시: 트랜잭션 사용 예**

```bash
const session = client.startSession();
session.startTransaction();

try {
  db.collection('users').insertOne({ name: "Alice", age: 25 }, { session });
  db.collection('orders').insertOne({ user: "Alice", total: 100 }, { session });
  session.commitTransaction();
} catch (e) {
  session.abortTransaction();
  throw e;
} finally {
  session.endSession();
}
```

---

### 🌐 Change Streams (변경 스트림)

Change Streams는 MongoDB에서 **실시간 데이터 변경 사항**을 구독할 수 있게 해주는 기능입니다. 데이터를 실시간으로 추적하고, 변화를 자동으로 감지할 수 있습니다.

### 🛠️ **Change Streams 사용법**

- **Change Streams 구독**: 데이터베이스나 컬렉션에서 일어나는 변화를 실시간으로 구독할 수 있습니다.

**예시: `users` 컬렉션의 데이터 변경 사항 추적**

```bash
const changeStream = db.collection('users').watch();
changeStream.on('change', (next) => {
  console.log(next);
});
```

---

### ✅ 결론

MongoDB는 단순한 CRUD 작업을 넘어 **고급 기능**을 통해 **성능**, **확장성**, **데이터 처리**의 효율성을 크게 향상시킬 수 있습니다. **Aggregation**, **인덱싱**, **트랜잭션**, **Change Streams**는 대규모 데이터 처리 및 실시간 시스템 구축에 필수적인 기능들입니다.

---