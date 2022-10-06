import React from 'react';

const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <br />
        <b>안녕하세요. 지원자 임지환입니다.</b>
        <br />
        <br />
        <br />
        <p>
          이번에 소개할 프로젝트는 <b>AWESOME FOOD STORE</b>라는 매장소개 프로젝트입니다.
        </p>
        <p>
          해당 프로젝트는 <b>React</b>, <b>javascript</b>, <b>NextJS</b>, <b>json-server</b>, <b>antd</b>, <b>env-cmd</b>를 사용하여 구축하였습니다.
        </p>
        <p>
          터미널에서 <b>cd client</b> 한 후 <b>yarn dev 및 npm run dev</b>를 하시면 해당 프로젝트를 3000번 포트에서 확인하실 수 있습니다.
        </p>
        <p>yarn dev를 하시면 Front와 json-server가 동시에 실행되도록 구축하였습니다.</p>
        <p>
          또한 <b>.env.development</b> 파일에서 서버포트 번호를 바꾸면 자동 적용되도록 처리하였습니다.
        </p>
        <p>샘플로 제공된 COMMON GROUND 프로젝트는 각 탭별로 페이지를 나눴지만, 그렇게 될경우 페이지를 누를때마다 깜빡이는 효과가 발생하여서</p>
        <p>또한 STORE탭에서 샘플은 한 줄에 이미지가 5개이나 json-server에서 내려오는 데이터는 총 8개 여서 한 줄에 4개씩으로 구현하였습니다.</p>
        <p>저는 하나의 index.js 파일안에 section 부분은 useState로 분기처리하여 제작하였습니다.</p>
        <br />
        <br />
        <p>이상 프로젝트 소개를 마치겠습니다.</p>
        <p>잘 부탁 드립니다.</p>
      </div>
    </section>
  );
};

export default About;
