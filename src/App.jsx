import Card from "./components/Card"
import Footer from "./components/Footer";
import posts from "./data/posts.json"

const App = () => {
  console.log(posts);


  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "3rem", marginBlock: "2rem" }}>Il mio blog</h1>
      <div className="cardsContainer">
        {
          posts.map((p, i) => {
            return <Card title={p.title} content={p.content} key={i} image="https://picsum.photos/600/400"></Card>
          })
        }
      </div>
      <Footer></Footer>

    </>
  )
}


export default App