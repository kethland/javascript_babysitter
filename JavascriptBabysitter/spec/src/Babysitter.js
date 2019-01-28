var Babysitter =( function(arrival, departure, bedtime){
	
	var self = function(){};
	
	var arrival = normalizeTime(arrival);
	var departure =  normalizeTime(departure);
	var bedtime = normalizeTime(bedtime);	
	
	function calculate(arrival, departure, bedtime){
		
		var pay = 0;
		
		for(var i = arrival; i < departure ; i++){
			if(i >= bedtime){
				if(i >= 12){
					pay += 8;
				}else
				pay += 6;
			}else
			pay += 10;
		}
		
			
		return pay;
		
	};
	
	function normalizeTime(time){
		if (time <= 4){
			return time += 12;
		}
		return time;
	};
	
	self.arrival = arrival;
	self.departure = departure;
	self.bedtime = bedtime;
	self.pay = calculate(arrival,departure,bedtime);
	
	
	
	return self;
});