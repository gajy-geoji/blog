# Packages

이 디렉터리는 여러 앱이나 POC에서 실제로 재사용하는 코드를 둡니다.

새 패키지는 독립적인 `package.json`, 공개 API, 타입 검사와 테스트를 가져야 합니다. 내부 의존성은 `workspace:*`로 선언합니다.
