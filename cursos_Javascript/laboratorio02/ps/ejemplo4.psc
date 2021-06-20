Algoritmo ejemplo4
	//definiendo variables
	definir nh,ch,des,bon,sf,sb como real ;
	//inicializando variables 
	nh=0; ch=0 ; sb=0 ;bon=0; des=0;sf=0;
	//capturando valores
	escribir "Ingresa el numero de horas trabajadas" ;
	leer nh;
	escribir "ingrese el costo por horas trabajadas";
	leer ch;
	//Realizando operaciones
	sb=nh*ch;
	bon=sb*0.07;
	des=sb*0.0375;
	sf=sb+bon-des;
	//mostrando resultados
	escribir "El sueldo basico es: ",sb;
	escribir "La bonificacion es :",bon;
	escribir "El descuento es:",des;
	escribir "El sueldo final es :",sf;
FinAlgoritmo
