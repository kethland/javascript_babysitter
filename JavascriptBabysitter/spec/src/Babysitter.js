var Babysitter =( function(arrival, departure, bedtime){
	
	var self = function(){};
	
	var arrival = arrival;
	var departure = departure;
	var bedtime = bedtime;
	
	
	self.arrival = normalizeArrivalTime(arrival);
	self.departure = normalizeDepartureTime(departure);
	self.bedtime = normalizeBedtime(bedtime);
	
		function normalizeArrivalTime(arrival){
			
			arrival += 12;
			if (arrival <= 16){
				return "You cannot arrive until 5 pm.";
			}else
				return arrival;
		};
		
		function normalizeDepartureTime(departure){
			
			if(departure >= 4){
				return "Must leave by 4 am.";
			}else
			return departure
		};
		
		function normalizeBedtime(bedtime){
			if(bedtime >= 12){
				return "Please reenter a valid bedtime."
			}else {
				return bedtime
			}
		};
	
		function calculate(){
			
			return departure - arrival;
			
		};
				
	self.pay = calculate();
	
	
	
	return self;
});