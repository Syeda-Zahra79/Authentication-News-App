import NewsContainer from "./NewsContainer";


export default function Container({results} : any) {
  
  return (
      <div className="w-[80%] md:w-[70%] flex flex-wrap mx-auto justify-evenly">
        {results !== undefined && (results.length > 0 ? 
        results.map((item : any)  => (
              <NewsContainer
                  key={item.article_id}
                  title={item.title}
                  link={item.link}
                  creator={item.creator}
                  description={item.description}
                  pubDate={item.pubDate}
                  full_description={item.full_description}
                  category={item.category}
              />
          ))
         : <h1>No Results Found...</h1>) }
      </div>
    );
}
