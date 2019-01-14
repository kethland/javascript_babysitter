var Babysitter =( function(arrival, departure, bedtime){
	
	var self = function(){};
	
	var arrival = arrival;
	var departure = departure;
	var bedtime = bedtime;
	
	
	self.arrival = normalizeArrivalTime(arrival);
	self.departure = departure;
	self.bedtime = bedtime;
	
		function calculate(){
			if(bedtime>=12){
				return "Please reenter a valid bedtime."
			}else {return arrival-departure;}
		};
		
		function normalizeArrivalTime(arrival){
			arrival += 12;
			if (arrival<=16){
				return "You cannot arrive until 5 pm.";
			}else
				return arrival;
		};
		
	
	
		
	self.pay = calculate();
	
	
	
	return self;
});