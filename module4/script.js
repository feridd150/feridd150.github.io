var names=new Array();
names[0]="Max";
names[1]="Jane";
names[2]="Jenny";
names[3]="Jeff";
names[4]="paul";
names[5]="david";
names[6]="ammy";
names[7]="ben";
names[8]="fred";
names[9]="jill";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)===`J`|| names[i].charAt(0)===`j`){
		console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}