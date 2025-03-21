// 이 코드는 Node.js에서 실행됩니다 - 브라우저 관련 코드(브라우저 API, JSX 등)는 사용하지 마세요.

/**
 * 사이드바를 생성하는 방법:
 * - docs 폴더 구조에 따라 자동으로 생성하거나
 * - 여기에 명시적으로 사이드바를 정의할 수 있습니다.
 * 원하는 만큼 사이드바를 만들 수 있습니다.
 * 
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // 기본적으로 Docusaurus는 docs 폴더 구조에 맞춰 사이드바를 생성합니다.
   tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // 수동으로 사이드바를 생성하는 예시
  /*
  tutorialSidebar: [
    'intro',  // 첫 번째 문서: 'intro'
    
    {
      type: 'category',  // '인터넷' 카테고리
      label: '인터넷',
      items: [
        'tutorial-basics/',  // 하위 항목 (여기서는 'tutorial-basics' 폴더로 가정)
        
        {
          type: 'category',  // '기술' 카테고리 (하위 카테고리)
          label: '기술',
          items: ['tutorial-basics/create-a-page', 'tutorial-basics/create-a-page'],  // 하위 항목들
        },
      ],
    },
    
    {
      type: 'category',  // 'Tutorial' 카테고리
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],  // 해당 카테고리의 하위 항목
    },
  ],
  */
};

export default sidebars;
