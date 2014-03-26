"Wassup. Ya'll know what the midwest is!?"

function subtract(a,b){
	return a -b;
}

function show(x){
	return alert(x);
}

alert(subtract(2,2));

function greaterthan(a){
	if (a > 8){
		return true;
	}
	else {
		return false;
	}
	
}

alert(greaterthan(9));

var text = "And I'm doing pretty good as far as geniuses go";
alert(text.length);

var cat = {colour: "grey", name: "Spot", size: 46};
cat.size = 47;
alert(cat.size);
delete cat.size;
alert(cat.size);
alert(cat);

var empty ={};
empty.yaboi = 9001;
show(empty.yaboi);

var thing = {"gabba gabba": "hey", "5": 10};
show(thing["5"]);
thing["5"] = 20;
show(thing[2 + 3]);
delete thing["gabba gabba"];

