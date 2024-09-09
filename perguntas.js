const perguntas = [[
    //Ginástica
    {
        enunciado: "Você está prestes a iniciar sua rotina no solo. Qual é sua primeira acrobacia?",
        alternativas: [
            {
                texto: "Um duplo mortal com pirueta.",
                afirmacao: "O duplo mortal com pirueta foi executado perfeitamente, impressionando os juízes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Um salto simples.",
                afirmacao: "O salto simples foi bem executado, mas os juízes esperavam algo mais desafiador. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está na trave de equilíbrio. Qual é sua próxima sequência?",
        alternativas: [
            {
                texto: "Uma série de saltos com giros complexos.",
                afirmacao: "A série de saltos com giros complexos foi realizada com precisão. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma sequência de passos básicos.",
                afirmacao: "A sequência de passos básicos foi segura, mas sem grandes dificuldades. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "No cavalo com alças, você decide tentar um movimento arriscado. Qual é sua escolha?",
        alternativas: [
            {
                texto: "Uma saída com dupla pirueta.",
                afirmacao: "A saída com dupla pirueta foi realizada com perfeição. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma saída simples.",
                afirmacao: "A saída simples foi bem executada, mas faltou complexidade. Pontuação moderada.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "Você está no exercício das barras assimétricas. Qual movimento você escolhe para impressionar os juízes?",
        alternativas: [
            {
                texto: "Um salto de uma barra para a outra com giro.",
                afirmacao: "O salto com giro foi executado com grande habilidade. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma transição simples entre as barras.",
                afirmacao: "A transição simples foi segura, mas sem impacto. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Na prova de salto sobre a mesa, qual salto você realiza?",
        alternativas: [
            {
                texto: "Um salto com dupla pirueta.",
                afirmacao: "O salto com dupla pirueta foi executado de maneira impecável. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Um salto com meia pirueta.",
                afirmacao: "O salto com meia pirueta foi bem realizado, mas os juízes esperavam mais dificuldade. Pontuação moderada.",
                pontos: 0
            }
        ]
    }], [
    //Judô
    {
        enunciado: "Você está no início da luta. Qual é sua primeira técnica?",
        alternativas: [
            {
                texto: "Um golpe de ippon seoi nage (arremesso por cima do ombro).",
                afirmacao: "Você executa um ippon seoi nage perfeitamente, derrubando seu oponente com um golpe limpo. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Um golpe de ouchi gari (rasteira interna).",
                afirmacao: "Você tenta um ouchi gari, mas seu oponente consegue se equilibrar e evitar a queda. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Seu oponente tenta um ataque. Como você responde?",
        alternativas: [
            {
                texto: "Usa uma técnica de contra-ataque (kaeshi waza).",
                afirmacao: "Seu contra-ataque foi eficaz, derrubando seu oponente e ganhando um wazari (meio ponto).",
                pontos: 1
            },
            {
                texto: "Defende o ataque e se afasta.",
                afirmacao: "Você defende com sucesso, mas não marca pontos.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está no chão, em ne-waza (técnicas de solo). Qual é sua próxima ação?",
        alternativas: [
            {
                texto: "Tenta um estrangulamento (shime waza).",
                afirmacao: "Você aplica um estrangulamento eficaz, forçando seu oponente a desistir. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Tenta um imobilização (osaekomi waza).",
                afirmacao: "Você consegue imobilizar seu oponente, mas ele escapa antes de você garantir a pontuação máxima. Meio ponto para você.",
                pontos: 1
            }            
        ]
    },
    {
        enunciado: "Você está de pé novamente, o que você faz?",
        alternativas: [
            {
                texto: "Executa um harai goshi (arremesso com a perna varrendo).",
                afirmacao: "Seu harai goshi foi bem executado, derrubando seu oponente com um golpe limpo. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Tenta um kouchi gari (rasteira menor).",
                afirmacao: "Seu kouchi gari foi bloqueado pelo seu oponente. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Seu oponente está tentando te imobilizar. Como você reage?",
        alternativas: [
            {
                texto: "Usa uma técnica de escape (hikkomi gaeshi).",
                afirmacao: "Você usa hikkomi gaeshi para escapar da imobilização e contra-atacar. Meio ponto para você.",
                pontos: 1
            },
            {
                texto: "Tenta resistir à imobilização.",
                afirmacao: "Você resiste à imobilização, mas não consegue escapar completamente. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    }
    ], [ 
    //Surfe
    {
        enunciado: "Você está se preparando para pegar a primeira onda da bateria. Qual é sua estratégia?",
        alternativas: [
            {
                texto: "Pegar a onda maior e mais desafiadora.",
                afirmacao: "Você pega a onda maior e realiza manobras impressionantes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Pegar uma onda menor e mais fácil.",
                afirmacao: "Você pega a onda menor e realiza manobras básicas. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está surfando uma onda. Qual manobra você tenta?",
        alternativas: [
            {
                texto: "Um aéreo (manobra aérea).",
                afirmacao: "Você executa um aéreo perfeito, impressionando os juízes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma rasgada básica.",
                afirmacao: "A rasgada foi bem executada, mas sem grandes desafios. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está se aproximando da seção crítica da onda. O que você faz?",
        alternativas: [
            {
                texto: "Tenta um tubo (entrar na parte oca da onda).",
                afirmacao: "Você entra no tubo e sai com sucesso. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Realiza uma manobra segura.",
                afirmacao: "Você realiza uma manobra segura, mas sem grandes riscos. Pontuação moderada.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "Você vê uma série de ondas se aproximando. Qual é sua escolha?",
        alternativas: [
            {
                texto: "Pega a primeira onda da série.",
                afirmacao: "A primeira onda da série foi a melhor e você conseguiu realizar manobras incríveis. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Espera a última onda da série.",
                afirmacao: "A última onda da série foi fraca e não permitiu manobras significativas. Pontuação baixa.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está no final da bateria e precisa de uma boa pontuação. O que você faz?",
        alternativas: [
            {
                texto: "Arrisca uma manobra difícil.",
                afirmacao: "A manobra difícil foi bem-sucedida e você conseguiu a pontuação necessária. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Joga seguro com uma manobra básica.",
                afirmacao: "A manobra básica foi bem executada, mas não suficiente para a pontuação necessária. Pontuação moderada.",
                pontos: 0
            }
        ]
    }
    ], [
    //Exercício Físico
    {
        enunciado: "Você acha importante praticar exercícios físicos?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Sim!",
                pontos: 1
            },
            {
                texto: "Não.",
                afirmacao: "Não!",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Quantas vezes por semana é recomendável fazer exercícios físicos na semana?",
        alternativas: [
            {
                texto: "Pelo menos 2 horas.",
                afirmacao: "Errado!",
                pontos: 0
            },
            {
                texto: "Pelo menos 1 hora.",
                afirmacao: "Exato!",
                pontos: 1
            }
        ]
    },
    {
        enunciado: "Você tem o habito de práticar exercícios físicos?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Ótimo!",
                pontos: 1
            },
            {
                texto: "Não.",
                afirmacao: "Poxa...",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "Qual é a importância da hidratação e da alimentação antes e depois dos treinos?",
        alternativas: [
            {
                texto: "Muito importante.",
                afirmacao: "Parabéns!",
                pontos: 1
            },
            {
                texto: "Pouco importante.",
                afirmacao: "Não foi dessa vez!",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Como posso criar uma rotina de exercícios que se encaixe na minha agenda ocupada?",
        alternativas: [
            {
                texto: "Encontrar pequenos blocos de tempo ao longo do dia para atividades físicas, optar por treinos curtos e intensos.",
                afirmacao: "Ótimo!",
                pontos: 1
            },
            {
                texto: "Não existe essa possibilidade.",
                afirmacao: "Poxa...",
                pontos: 0
            }
        ]
    }]
];