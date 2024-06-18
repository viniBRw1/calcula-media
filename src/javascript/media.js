document.getElementById('media').addEventListener('click', exibirMedia);

function exibirMedia() {

	let notas = [];
    let cont = 0;
    let media = 0;
	nome = prompt('qual o seu nome ?');

	do {
	nota = parseInt(prompt(nome +' Qual sua nota'));
	cont = parseInt(prompt(nome + ' quer inserir outra nota ? 1.Sim 2.Não'));
	notas.push(nota);
     } while( cont == 1)

     ativ=notas.length

     for(i = 0 ; i < notas.length ; i++){
     	media += notas[i] }

     ex ='a sua nota total foi ' + media + ' em um total de ' + ativ + ' atividades' + '<br>'
     media = media / notas.length
     ex += 'media final '+media

    document.getElementById('mostrarMedia').classList.add('media');

    document.getElementById('mostrarMedia').innerHTML = ex}

document.getElementById('limparMedia').addEventListener('click', limpar);

function limpar(){
	document.getElementById('mostrarMedia').innerHTML = ''
    document.getElementById('mostrarMedia').classList.remove('media');}