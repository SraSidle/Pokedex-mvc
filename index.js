import express from 'express' 
import path from 'path' 

const __dirname = path.resolve(path.dirname('')) 

const app = express() 

app.use(express.urlencoded({extended: true})) 
app.use(express.json())

app.set("view engine", "ejs") 
app.use(express.static(path.join(__dirname, "public")))

const port = 3000
app.listen(port, () => { 
    console.log(`Rondando na porta ${port}`)
})

app.listen(3000, ( ) => console.log("Servidor rodando em http://localhost:3000/"));

const pokemon = [
  { 
    id: 1,
    nome: "Bulbasaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    tipo:"grass",
    descricao: "Há uma semente de planta em suas costas desde o dia em que este Pokémon nasce. A semente lentamente cresce."
  },
  {
    id: 2,
    nome: "Ivysaur",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    tipo:"Grass", //grama
    descricao: "Quando a lâmpada em suas costas cresce grande, parece perder a capacidade de ficar em suas patas traseiras."
  },
  {
    id:3 ,
    nome: "Venusaur" ,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    tipo:"Grass",
    descricao: "Sua planta floresce quando está absorvendo energia solar. Ele fica em movimento para buscar a luz solar"
  },
  {
    id: 4,
    nome: "Charmander",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    tipo: "fire" ,
    descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
  },
  {
    id: 5,
    nome: "Charmeleon",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    tipo: "Fire",
    descricao: "Tem uma natureza bárbara. Em batalha, ele chicoteia sua cauda ardente ao redor e corta com garras afiadas."
  },
  {
    id: 6,
    nome: "Charizard",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    tipo:"Fire", //voador
    descricao: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.",
  },
  {
    id: 7,
    nome: "Squirtle" ,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    tipo: "Water",
    descricao: "Quando ele retrai seu pescoço longo em sua concha, ele esguicha água com força vigorosa."
  },
  {
    id: 8,
    nome: "Wartortle" ,
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    tipo: "Water",
    descricao: "É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito velho."
  },
  {
    id: 9, 
    nome: "Blastoise",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    tipo: "Water",
    descricao: "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele vai se retirar dentro de sua concha."
  },
  {
    id: 10,
    nome: "Cartepie",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    tipo: "Bug", //
    descricao: "Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar inimigos."
  },
  {
    id: 11,
    nome: "Metapod",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    tipo: "bug", 
    descricao: "Está esperando o momento evoluir. Nesta fase, ele só pode endurecer, por isso permanece imóvel para evitar o ataque."
  },
  {
    id: 12,
    nome: "Butterflui",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    tipo: "Bug",
    descricao: "Em batalha, ele bate suas asas em grande velocidade para liberar poeira altamente tóxica no ar."
  }, 
  {
    id: 13,
    nome: "Weedle",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    tipo:"Grass",
    descricao: "Cuidado com o ferrão afiado em sua cabeça. Ele se esconde na grama e arbustos onde come folhas."
  },
  {
    id:14,
    nome: "Kakuna",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    tipo: "Bug", //veneno
    descricao: "Capaz de se mover apenas ligeiramente. Quando ameaçado, pode se destacar e envenenar seu inimigo."
  },
  {
    id:15,
    nome: "Beedrill",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    tipo: "Bug", //veneno
    descricao: "Tem três ferrões venenosos em suas pernas dianteiras e sua cauda. Eles são usados para golpear seu inimigo repetidamente."
  },
  {
    id:16,
    nome: "Pidgey",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    tipo: "Normal", //Voador
    descricao: "Muito dócil. Se atacado, muitas vezes vai chutar areia para se proteger em vez de lutar."
  },
  {
    id: 17,
    nome: "Pidgeotto",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    tipo: "Normal", //voador
    descricao: "Este Pokémon está cheio de vitalidade. Ele constantemente voa em torno de seu grande território em busca de presas."
  },
  {
    id: 18,
    nome: "Pidgeot",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    tipo: "Normal", //voador
    descricao: "Este Pokémon voa em velocidade mach 2, procurando presas. Suas grandes garras são temidas como armas perversas."
  },
    {
      id: 19,
      nome: "Rattata" ,
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
      tipo: "Normal",
      descricao: "Vai mastigar qualquer coisa com suas presas. Se você ver um, você pode ter certeza de que mais 40 vivem na área."
    },
    {
      id: 20,
      nome: "Raticate",
      imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
      tipo: "Normal",
      descricao: "Seus pés traseiros são teias. Eles agem como nadadeiras, para que possa nadar em rios e caçar presas."
    }
]

//Rotas "São caminhos que aparecem depois do nome da pagina"
app.get("/", (req, res) => {
  res.render("index" , {pokemon});
});

app.get("/detalhes/:id" , (req , res) => {
  console.log(req.params.id)
   res.render("detalhes.ejs")
})

app.post("/add" , (req, res) => {
  const pokedex = req.body;

  pokemon.push(pokedex);
  pokemon.id = pokemon.length + 1

  res.redirect("/")
})

app.get("/cadastro" , (req, res) => {
  res.render('cadastro.ejs')
})
// o usuário vai enviar algo pra mim, não redenriza nada, só no get
app.post("/cadastro" , (req, res) => {
  res.send('Enviado com sucesso!')
})
/* Mvc não funciona delete e nem o put. Recomendado sempre usar "get" */
/*app.get("/home" , (req , res) => {
    res.send("Olá mundo do Express!")
}) */
/*Número;
Nome;
Tipo;
Imagem;
Descrição;
Altura;
Peso;
Categoria;
Habilidade; */