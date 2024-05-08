const titulo = document.getElementById('titulo');
const botoes = document.querySelectorAll('.botao_doar');
const link_cruzvermelha = document.getElementById('link_cruzvermelha')
const link_cozinha = document.getElementById('link_cozinha')
const link_cufa = document.getElementById('link_cufa')
const link_usp = document.getElementById('link_usp')

const translations = {
    pt : {
        titulo : "ESCOLHA UMA INSTITUIÇÃO",
        botao_doe : "Doe agora",
        link_cruzvermelha: "https://forms.gle/DGcXayESUZbYPEY26",
        link_cozinha : "https://forms.gle/MqXp22prszprjfY56",
        link_cufa: "https://forms.gle/vjbWniMdomdknZoL7",
        link_usp: "https://forms.gle/M4NVtMZhQnXiGJUt8",
    },

    eng : {
        titulo : "CHOOSE AN ORGANIZATION",
        botao_doe : "Donate now", 
        link_cruzvermelha: "https://www.google.com/",
        link_cozinha : "https://www.google.com/",
        link_cufa: "https://www.google.com/",
        link_usp: "https://www.google.com/",
    },

    es : {
        titulo : "ELEGIR UNA ORGANIZACIÓN",
        botao_doe : "Done ahora",
        link_cruzvermelha: "https://www.youtube.com/",
        link_cozinha : "https://www.youtube.com/",
        link_cufa: "https://www.youtube.com/",
        link_usp: "https://www.youtube.com/",
        
    }
}

document.querySelectorAll('.btn-check').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const idioma = this.id;
        if (this.checked) {
            console.log('Opção selecionada:', idioma);
            // SWITCH
            switch (idioma) {
                case "English":
                    titulo.textContent = translations.eng.titulo;
                    link_cruzvermelha.href = translations.eng.link_cruzvermelha;
                    link_cozinha.href = translations.eng.link_cozinha;
                    link_cufa.href = translations.eng.link_cufa;
                    link_usp.href = translations.eng.link_usp;
                    botoes.forEach(function(botao) {
                        botao.textContent = translations.eng.botao_doe;
                    });
                    break;

                case "Espanol":
                    titulo.textContent = translations.es.titulo;
                    link_cozinha.href = translations.es.link_cozinha;
                    link_cufa.href = translations.es.link_cufa;
                    link_usp.href = translations.es.link_usp;
                    link_cruzvermelha.href = translations.es.link_cruzvermelha;
                    botoes.forEach(function(botao) {
                        botao.textContent = translations.es.botao_doe;
                    });
                    break;

                default:
                    titulo.textContent = translations.pt.titulo;
                    link_cozinha.href = translations.pt.link_cozinha;
                    link_cufa.href = translations.pt.link_cufa;
                    link_usp.href = translations.pt.link_usp;
                    link_cruzvermelha.href = translations.pt.link_cruzvermelha;
                    botoes.forEach(function(botao) {
                        botao.textContent = translations.pt.botao_doe;
                    });
                    break;
            }
        }
    });
});

