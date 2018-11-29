var Babysitter =( function(arrival, departure, bedtime){
	
	var self = function(){};
	
	var arrival = arrival;
	var departure = departure;
	var bedtime = bedtime;
	
		function calculate(){
			if(bedtime==12){
				return "Please reenter a valid bedtime."
			}else {return departure-arrival;}
		};
		
	
	self.pay = calculate();
	
	self.arrival = arrival;
	self.departure = departure;
	self.bedtime = bedtime;
	
	return self;
});