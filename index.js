const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log('Jesus te ama!')

async function dollarBot(){
    const navegador = await puppeteer.launch({ headless: true});
    const paginaWeb = await navegador.newPage();
    const moedaBase = readlineSync.question('Digite a moeda base: ') || 'dollar';
    const moedaFinal = readlineSync.question('Digite a moeda final: ') || 'real';
    const linkPesquisa = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIPCAEQABgKGIMBGLEDGIAEMgkIAhAAGAoYgAQyCQgDEAAYChiABDIJCAQQABgKGIAEMgkIBRAAGAoYgAQyCQgGEAAYChiABDIJCAcQABgKGIAEMgkICBAAGAoYgAQyCQgJEAAYChiABNIBCDQ1NTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8`;
    await paginaWeb.goto(linkPesquisa);
    await paginaWeb.screenshot({ path:'foto001.png'});
    const resultado = await paginaWeb.evaluate( () => {
       return document.querySelector('.lWzCpb.a61j6').value
    });

    console.log(`o valor de 1 ${moedaBase} em ${moedaFinal} é de ${resultado}`)

    await paginaWeb.close();

};

dollarBot()