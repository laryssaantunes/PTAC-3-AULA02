const url = "https://back-end-ifms-chi.vercel.app/campi";


export default async function Home() {

  const resposta = await fetch(url,{
    next: {
      revalidate: 1
    }
  });
  const campis = await resposta.json();
 
  return (
    <main>
      <h1>Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campus.nome_campus}</p>
        </div>
      )}
    </main>
  )
}
