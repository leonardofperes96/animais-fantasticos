
const animaisImagem = document.querySelectorAll('.animais-lista li');
const animaisConteudo = document.querySelectorAll('.animais-descricao section');
if (animaisConteudo.length && animaisImagem.length){
    animaisConteudo[0].classList.add('ativo');
    const activeTab = (index)=>{
   
    animaisConteudo.forEach((conteudo)=>{
    conteudo.classList.remove('ativo');
    })
    animaisConteudo[index].classList.add('ativo');  
};
    animaisImagem.forEach((imagem, index)=>{
    imagem.addEventListener('click', ()=>{
    activeTab(index);

    });;
});
}


const faqPerguntas = document.querySelectorAll('.faq-lista dt');
const faqRespostas = document.querySelectorAll('.faq-lista dd');

const activeAnswers = (index)=>{
    faqRespostas[index].classList.toggle('ativo');
}


faqPerguntas.forEach((perguntas,index)=>{
    perguntas.addEventListener('click', ()=>{
        activeAnswers(index);

    });
});


const linksInternos = document.querySelectorAll('a[href^="#"');

    const activeScroll = (e)=>{
    const html = e.currentTarget.getAttribute('href');
    const section = document.querySelector(html);
    section.scrollIntoView({
        behavior :'smooth',
        block: 'start',

    });
    };
linksInternos.forEach((link)=>{
    link.addEventListener('click' , (e)=>{
    e.preventDefault();
    activeScroll(e);
    });
});


const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.5;
    const animaScroll = ()=>{
        sections.forEach((section)=>{
        const sectionTop = (section.getBoundingClientRect().top - windowMetade);
        if (sectionTop < 0){
            section.classList.add('ativo');
            
        };
        });


    }

window.addEventListener('scroll', animaScroll);
