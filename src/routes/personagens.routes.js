import { Router } from "express"

const personagensRoutes = Router()

let personagens = [
    {
      id: 100,
      nome: "Totoro",
      studio: "Ghibli",
      vivo: true
    },
    {
      id: 101,
      nome: "Barbie",
      studio: "Mattel",
      vivo: true
    },
    {
      id: 102,
      nome: "Dean Winchester",
      studio: "Madhouse",
      vivo: false
    } 
  ]

  //Buscar todos personagens
personagensRoutes.get("/", (req, res) => {
    return res.status(200)
    .send(personagens)
});

//Criar um novo personagem
personagensRoutes.post("/", (req, res) => {
    const {nome, studio, vivo} = req.body
    const novoPersonagem = {
      id: personagens.length + 1,
      nome: nome,
      studio: studio,
      vivo: vivo,
    };
    personagens.push(novoPersonagem);
    return res.status(201).send(novoPersonagem);
  });

  //Deletar personagem por id  
personagensRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    const personagem = personagens.find((person) => person.id == id )
  
    if (!personagem) {
      return res.status(404).send({
        message: "Personagem não encontrado!",
      });
    }
personagens = personagens.filter((person) => person.id != id );
  
  
    return res.status(200).send({
      message: "Personagem deletada!",
      personagem,
    });
});

export default personagensRoutes;