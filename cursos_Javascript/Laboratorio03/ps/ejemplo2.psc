Algoritmo ejemplo2
	//definiendo variables
	definir lad,area como entero;
	definir men como texto;
	//Inicializando variables
	lad=0; area=0; men="";
	//capturando valores 
	escribir "Ingresa el lado del cuadrado";
	leer lad;
	//Realizando operacion 
	area=lad*lad;
	//condicion
	si (area>100) Entonces
		men="Es un cuadrado grande";
		
	FinSi
	//mostrando resultaods
	escribir "El area del cuadrado es: ",area;
	escribir men ;
FinAlgoritmo

