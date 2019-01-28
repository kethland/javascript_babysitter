describe ("A Babysitter", function(){
	
	describe("normalizes times after midnight" , function(){
		
//		it("of 1 and normalizes it.", function(){
//			var expected = Babysitter(1,1,1);
//			expect(expected.arrival).toEqual(13);
//		});
//		
//		it("of 2 and normalizes it.", function(){
//			var expected = Babysitter(2);
//			expect(expected.arrival).toEqual(14);
//		});
//		
//		it("of 5 and normalizes it.", function(){
//			var expected = Babysitter(5);
//			expect(expected.arrival).toEqual(5);
//		});	
		
	});
	
	describe("accepts a departure time",function(){

//		it("of 2 and normalizes it.",function(){
//			var expected = Babysitter(5,2);
//			expect(expected.departure).toEqual(14);
//		});
//				
//		it("of 4 and normalizes it.",function(){
//			var expected = Babysitter(5,4);
//			expect(expected.departure).toEqual(16);
//		});
				
	});
	
	describe("accepts a bedtime",function(){

		
	});
		
	describe("receives pay",function(){

		it("for riding herd for 1 hour",function(){
			var expected = Babysitter(5,6,6);
			expect(expected.pay).toEqual(10);
		});
		
		it("for riding herd for 2 hours",function(){
			var expected = Babysitter(5,7,3);
			expect(expected.pay).toEqual(20);
		});
			
		it("for riding herd for after kids go to bed, but before midnight hours",function(){
			var expected = Babysitter(5,7,6);
			expect(expected.pay).toEqual(16);
		});
	
		
	});	
});