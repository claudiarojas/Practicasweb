Algoritmo ejemplo3
	definir pre ,sbt,igv,tot como real ;
	definir can como entero;
	pre=0;can=0;sbt=0;igv=0;tot=0 ;
	//capturando valores
	escribir "ingresa el precio del producto:";
	leer pre;
	escribir "Ingresa la cantidad de productos a llevar:";
	leer can;
	//Realizando operacion 
	sbt=pre*can;
	igv=sbt*0.18;
	tot=sbt+igv;
	//mostrando resultados 
	escribir " El subtotal es: ",sbt;
	escribir "El igv es :",igv;
	escribir "El total es :",tot;
	
	
FinAlgoritmo
