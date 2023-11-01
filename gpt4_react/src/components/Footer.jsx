import { footerData } from "../mockData/footerData";
import logoSvg from "../assets/img/logo.svg";

export const FooterMenu = ({ menuItem }) => {
    const { header, href, link1, link2, link3, link4 } = menuItem;
    return (
        <div className="column_footer_side">
            <h4 className="footer_text_header">{header}</h4>
            <a href={href} className="footer_text">{link1}</a>
            <a href={href} className="footer_text">{link2}</a>
            <a href={href} className="footer_text">{link3}</a>
            <a href={href} className="footer_text">{link4}</a>
        </div>
    );
  };

export const FooterTop = ({ footerButton }) => {
    const {title, button: {href, text}} = footerButton;
    return (
        <div className="container_footer_main_top">
            <h1 className="footer_header">{title}</h1>
            <button href={href} className="button-demo btn">{text}</button>
        </div>
    );
};

export const Logo = ({ logo }) => {
    const {href, text, alt,} = logo;
    return (
        <div className="footer_logo">
            <a href={href} className="logo__link">
                <img className="link__name" src={logoSvg} alt={alt}/> 
            </a>
            <p className="footer_text">{text}</p>
        </div>
    );
};

export const Copyright = ({text}) => {
    return <p className="copyright">{text}</p>;
}
  
export const Footer = () => {
    const {footerTopData, footerLogoData, footerMenuData, copyrightData} = footerData;
    
    const resultTemplate = (
        <div className="container_footer_main">
            <FooterTop footerButton = {footerTopData}/>
            <div className="container_footer_main_bottom">
                <Logo logo = {footerLogoData}/>
                <div className="container_footer_side">
                    {footerMenuData.map((menuItem, index) => (
                        <FooterMenu key={index} menuItem={menuItem} />
                    ))}
                </div>
            </div>
            <Copyright text = {copyrightData}/>
        </div>
    );
    return resultTemplate;
};

export default Footer;