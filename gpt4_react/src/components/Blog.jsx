import { blogData } from "../mockData/blogData";
 import article1Svg from "../assets/img/articles/article_1.png";
 import article2Svg from "../assets/img/articles/article_2.png";
 import article3Svg from "../assets/img/articles/article_3.png";
 import article4Svg from "../assets/img/articles/article_4.png";
 import article5Svg from "../assets/img/articles/article_5.png";

const images = [ article1Svg, article2Svg, article3Svg, article4Svg, article5Svg, ];

export const Header = ({ header }) => {
    return <h1 className="blog_header">{header}</h1>;
};

export const BlogImage = ({ image }) => {
    const { alt } = image;

    return <img className="article_img" src={images[alt-1]} alt={alt}/>;
};

export const BlogDescription = ({ description }) => {
    const {date, title, href, text} = description;
    return (
        <>
        <p className="article_data">{date}</p>
        <h3 className="article_title">{title}</h3>
        <a href={href} className="read_all_article">{text}</a>
        </>
    );
};

export const Article = ({ article_content }) => {
    const {className, description, img} = article_content;

    return (
        <div className={className}>
            <div className="container_blog_img_text">
                <BlogImage image={img}/>
                <div className="container_blog_text">
                    <BlogDescription description={description}/>
                </div>
            </div>
        </div>
    );
}
  
  export const Blog = () => {
    const {blogArticleData, blogHeaderData} = blogData;

    const leftArticles = blogArticleData.filter((article) => article.className === "container_blog_part_left");
    const rightArticles = blogArticleData.filter((article) => article.className === "container_blog_img_text");

    const secondaryLeftArticles = [];
    for (let i = 0; i < rightArticles.length/2; i++) {
        secondaryLeftArticles.push(rightArticles[i])
        console.log(rightArticles[i]);
    }
    
    const secondaryRightArticles = [];
    for (let i = rightArticles.length/2; i < rightArticles.length; i++) {
        secondaryRightArticles.push(rightArticles[i])
    }
    
    return (
        <>
        <Header header={blogHeaderData}/>
        <div className="container_blog">
            {leftArticles.map((article_content, index) => (
                <Article key={index} article_content={article_content} />
            ))}
            <div className="container_blog_part">
                {secondaryLeftArticles.map((article_content, index) => (
                    <Article key={index} article_content={article_content} />
                ))}
            </div>
            <div className="container_blog_part">
                {secondaryRightArticles.map((article_content, index) => (
                    <Article key={index} article_content={article_content} />
                ))}
            </div>
        </div>
        </>
    );
  };

  export default Blog;