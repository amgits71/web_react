import { ctaData } from "../mockData/ctaData";

export const LeftTemplate = ({ header }) => {
    const { title, href, text } = header;

    return (
        <>
            <a href={href} className="ask_access_cta">{text}</a>
            <h3 className="container__header sign_up">{title}</h3>
        </>
    );
};

export const RightTemplate = ({ text }) => {
    return <button className="cta_buttons_sign_up btn">{text}</button>;
};

export const CTA = () => {
    const { ctaLeftData, ctaRightData } = ctaData;

    return (
        <>
            <div className="CTA_left">
                <LeftTemplate header={ctaLeftData} />
            </div>
            <div className="CTA_right">
                <RightTemplate text={ctaRightData} />
            </div>
        </>
    );
};

export default CTA;
