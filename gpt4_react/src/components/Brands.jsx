import brandsData from "../mockData/brandsData";
import googleSvg from "../assets/img/brands/google.svg";
import slackSvg from "../assets/img/brands/slack.svg";
import atlassianSvg from "../assets/img/brands/atlassian.svg";
import dropboxSvg from "../assets/img/brands/dropbox.svg";
import shopifySvg from "../assets/img/brands/shopify.svg";

export const BrandsImage = ({ brand: { alt } }) => {
  // const { brand } = props;
  // const { alt } = brand;

  // console.log(alt);
  if (alt === "google")
    return <img className="brands_section__img" src={googleSvg} alt={alt} />;

  if (alt === "slack")
    return <img className="brands_section__img" src={slackSvg} alt={alt} />;

  if (alt === "atlassian")
    return <img className="brands_section__img" src={atlassianSvg} alt={alt} />;

  if (alt === "dropbox")
    return <img className="brands_section__img" src={dropboxSvg} alt={alt} />;

  if (alt === "shopify")
    return <img className="brands_section__img" src={shopifySvg} alt={alt} />;
};

export const BrandsTemplate = ({ brandsData }) => {
  // console.log(brandsData);
  return brandsData.map((brand, index) => (
    <BrandsImage key={index} brand={brand} />
  ));
};

const Brands = () => {
  return <BrandsTemplate brandsData={brandsData} />;
};

export default Brands;
