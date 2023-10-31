import whatIsGptData from "../mockData/whatIsGptData";

export const WhatIsGptTopTemplate = ({ whatIsGptTopData }) => {
  const { header, content } = whatIsGptTopData;
  return (
    <>
      <h3 className="top__header lined_header">{header}</h3>
      <p className="top__content">{content}</p>
    </>
  );
};

export const WhatIsGptMiddleTemplate = ({ whatIsGptMiddleData }) => {
  const {
    header,
    button: { href, title },
  } = whatIsGptMiddleData;

  return (
    <>
      <h2 className="middle__header">{header}</h2>
      <a href={href} className="middle_cta">
        {title}
      </a>
    </>
  );
};

export const WhatIsGptContainerTemplate = ({ item }) => {
  const { header, content } = item;
  return (
    <div className="bottom__container">
      <h3 className="container__header lined_header">{header}</h3>
      <p className="container__content">{content}</p>
    </div>
  );
};

export const WhatIsGptBottomTemplate = ({ whatIsGptBottomData }) => {
  return whatIsGptBottomData.map((item, index) => (
    <WhatIsGptContainerTemplate key={index} item={item} />
  ));
};

const WhatIsChatGpt = () => {
  const { whatIsGptTopData, whatIsGptMiddleData, whatIsGptBottomData } =
    whatIsGptData;

  return (
    <>
      <div className="what_is_chatgpt_section__top">
        <WhatIsGptTopTemplate whatIsGptTopData={whatIsGptTopData} />
      </div>
      <div className="what_is_chatgpt_section__middle">
        <WhatIsGptMiddleTemplate whatIsGptMiddleData={whatIsGptMiddleData} />
      </div>
      <div className="what_is_chatgpt_section__bottom">
        <WhatIsGptBottomTemplate whatIsGptBottomData={whatIsGptBottomData} />
      </div>
    </>
  );
};

export default WhatIsChatGpt;
