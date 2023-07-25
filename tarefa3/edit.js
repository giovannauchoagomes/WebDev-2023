function add(first, second){
	return first + second;
}

function sub(first, second){
	return first - second;
}


function mul(first, second){
	return first*second;
}

function div(first, second){
	return first/second;
}

function is_even(number){
	if(Math.abs(number) % 2 == 1){
		return false;
	}
	else{
		return true;
	}
}
