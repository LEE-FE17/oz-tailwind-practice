import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="max-w-6xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
/* 전체 레이아웃 담당, 가운데 정렬 + 배경색 + 여백 처리 */