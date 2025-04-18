---
sidebar_position: 1
---

# Git 기본 개념

## 📝 **Git이란?**

<aside>
💡

git은 소스 코드의 버전 관리를 위한 분산 버전 관리 시스템 입니다.
개발자의 코드 변경 사항을 체계적으로 기록하여 효율적인 협업과 코드 이력관리를 하게 한다

</aside>

---

### **🔑Git의 핵심 개념**

- **📁 Repository (저장소)**
    
    Git 프로젝트가 저장되는 공간입니다. 모든 파일, 이력, 버전 정보가 포함되며, **로컬**과 **원격 저장소**로 관리됩니다.
    
- **📌 Commit (커밋)**
    
    변경 사항을 **저장소에 기록**하는 단위입니다. 커밋마다 고유 ID가 부여되어 특정 시점으로의 되돌리기가 가능합니다.
    
- **🌱 Branch (브랜치)**
    
    독립된 작업 흐름을 만들어 **기능 개발**이나 **버그 수정**을 분리하여 관리할 수 있습니다. 메인 브랜치 외에 새로운 브랜치에서 작업 후 **병합(Merge)** 가능합니다.
    
- **🔗 Merge (병합)**
    
    분리된 브랜치의 작업을 하나로 **통합**하는 과정입니다. 이 과정에서 코드 충돌이 발생할 수 있으며, 충돌 해결이 필요합니다.
    
- **🌐 Remote Repository (원격 저장소)**
    
    GitHub, GitLab 같은 **클라우드 기반 저장소**로, 다른 개발자와 협업할 수 있게 합니다.
    
    로컬 저장소의 변경 사항을 **Push(업로드)**하거나, **Pull(다운로드)**하여 최신 상태로 유지합니다.
    

---

### 3. ⚙️ **Git의 작동 원리**

Git은 로컬과 원격 저장소를 연동하여 사용합니다.

1. **로컬 저장소 생성 및 작업**
2. **원격 저장소와 연결**
    
    `git remote add`로 원격 저장소와 연결합니다.
    
3. **Push** 로컬 커밋을 원격 저장소에 업로드
4. **Pull** 원격 저장소의 최신 커밋을 로컬로 가져

---

### 4. 💡 **Git의 주요 특징**

- **🗂️ 분산 버전 관리**
    
    로컬과 원격 저장소 모두를 관리해 **안전성**과 **편리성**을 제공합니다.
    
- **🤝 효율적인 협업 도구**
    
    여러 개발자가 병렬로 작업하면서 코드 충돌을 최소화하고 효율적으로 관리할 수 있습니다.
    
- **🕒 버전 추적 및 복원**
    
    과거 버전으로 돌아가거나 특정 커밋 상태로 복원하여 **오류를 최소화**할 수 있습니다.