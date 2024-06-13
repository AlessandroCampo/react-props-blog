import Card from "./components/Card"
import Chip from "./components/Chip";
import Footer from "./components/Footer";
import posts from "./data/posts.json"
import selectColor from "./utils";

const App = () => {
  const allTags = posts.reduce((tags, post) => {
    post.tags.forEach(tag => tags.add(tag));
    return tags;
  }, new Set())


  return (
    <>
      <h1 className="text-center font-bold text-5xl my-12 uppercase">Il mio blog</h1>
      <div className="tag-box flex items-center gap-2 flex-wrap justify-center w-2/3 mx-auto my-12">
        {
          [...allTags].map(t => {
            return <Chip content={t} color={selectColor(t)}></Chip>
          })
        }
      </div>
      <div className="cardsContainer">
        {
          posts.map((p, i) => {
            return p.published && <Card
              title={p.title}
              content={p.content}
              image={p.imgUrl}
              tags={p.tags || []}
              key={`c${i}`}

            >
            </Card>
          })
        }
      </div>
      <Footer></Footer>

    </>
  )
}


export default App