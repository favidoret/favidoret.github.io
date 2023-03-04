function mostrar() {
  div = document.getElementById('flotante');
  div.style.display = '';
}

function cerrar() {
  div = document.getElementById('flotante');
  div.style.display = 'none';
}

function sobremi() {
  div = document.getElementById('sobremi');
  div.style.display = 'block';
  document.getElementById('ocupaciones').style.display = 'none';
  document.getElementById('estudios').style.display ='none';
  document.getElementById('public').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
}

function contacto() { 
  div = document.getElementById('contacto');
  div.style.display = 'block';
  document.getElementById('ocupaciones').style.display = 'none';
  document.getElementById('estudios').style.display ='none';
  document.getElementById('public').style.display = 'none';
  document.getElementById('sobremi').style.display = 'none';
}

function estudios() {
  div = document.getElementById('estudios');
  div.style.display = 'block';
  document.getElementById('ocupaciones').style.display = 'none';
  document.getElementById('sobremi').style.display ='none';
  document.getElementById('public').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
}

function ocupaciones() {
  div = document.getElementById('ocupaciones');
  div.style.display = 'block';
  document.getElementById('sobremi').style.display = 'none';
  document.getElementById('estudios').style.display ='none';
  document.getElementById('public').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
}

function public() {
  div = document.getElementById('public');
  div.style.display = 'block';
  document.getElementById('ocupaciones').style.display = 'none';
  document.getElementById('estudios').style.display ='none';
  document.getElementById('sobremi').style.display = 'none';
  document.getElementById('contacto').style.display = 'none';
}