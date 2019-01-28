var Babysitter =( function(arrival, departure, bedtime){
	
	var self = function(){};
	
	var arrival = normalizeTime(arrival);
	var departure =  normalizeTime(departure);
	var bedtime = normalizeTime(bedtime);	
	
	function calculate(arrival, departure, bedtime){
		
		var pay = 0;
		
		for(var i = arrival; i < departure ; i++){
			if(i >= bedtime){
				pay += afterMidnightPay(i, pay);
			}else
				pay += 10;
		}		
		return pay;
		
	};
	
	function afterMidnightPay(i, pay){
		if(i >= 12){
			return addPayForHour(8);
		}else
			return addPayForHour(6);
			
	};
	
	function addPayForHour(payRate){
		return payRate;
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