import expectationsData from "../mockData/expectationsData";
import WomanVRSvg from "../assets/img/woman_VR.png";

export const WomanVRTemplate = ({ image }) => {
    const { alt } = image;
    return <img src={WomanVRSvg} alt={alt} />;
}

export const HeaderTemplate = ({ header }) => { 
    const { title, href, text } = header;

    return (
        <div className="right__container_1">
            <a href={href} className="ask_access_cta">{text}</a>
            <h2 className="right_header">{title}</h2>
        </div>
    );
}

export const DescriptionTemplate = ({ description_content }) => {
    const { description, href, text } = description_content;
    return (
    <div className="right__container_2">
        <p className="container_content">
            {description}
        </p>
        <a href={href} className="left__cta">{text}</a>
    </div>
    );
}

const Expectations = () => {
    const { womanVR, expectationsHeaderData, expectationsDescriptionData } = expectationsData;

    return (
        <>
            <div className="exceed_expectations_left">
                <WomanVRTemplate image ={womanVR} />
            </div>
            <div className="exceed_expectations_right">
                <HeaderTemplate header={expectationsHeaderData}/>
                <DescriptionTemplate description_content={expectationsDescriptionData} />
            </div>
        </>
    );
};

export default Expectations;