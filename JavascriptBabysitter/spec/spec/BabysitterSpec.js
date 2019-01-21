describe ("A Babysitter", function(){
	
	describe("normalizes times after midnight" , function(){
		
		it("of 1 and normalizes it.", function(){
			var expected = Babysitter(1,1,1);
			expect(expected.arrival).toEqual(13);
		});
		
		it("of 2 and normalizes it.", function(){
			var expected = Babysitter(2);
			expect(expected.arrival).toEqual(14);
		});
		
		it("of 5 and normalizes it.", function(){
			var expected = Babysitter(5);
			expect(expected.arrival).toEqual(5);
		});	
		
	});
	
	describe("accepts a departure time",function(){

		it("of 2 and normalizes it.",function(){
			var expected = Babysitter(5,2);
			expect(expected.departure).toEqual(14);
		});
				
		it("of 4 and denies it.",function(){
			var expected = Babysitter(5,4);
			expect(expected.departure).toEqual(16);
		});
//		
//		it("of 5 and denies it.",function(){
//			var expected = Babysitter(5,5);
//			expect(expected.departure).toEqual("Must leave by 4 am.");
//		});
		
	});
	
	describe("accepts a bedtime",function(){

//		it("of 3 and returns it.",function(){
//			var expected = Babysitter(5,2,3);
//			expect(expected.bedtime).toEqual(3);
//		});
//		
//		it("of 6 and returns it.",function(){
//			var expected = Babysitter(5,4,6);
//			expect(expected.bedtime).toEqual(6);
//		});
//		
//		it("and ensures it is not midnight",function(){
//			var expected = Babysitter(5,4,12);
//			expect(expected.bedtime).toEqual("Must be in bed before midnight.");
//		});
//		
//		it("and ensures it is not greater than 12",function(){
//			var expected = Babysitter(5,4,13);
//			expect(expected.bedtime).toEqual("Must be in bed before midnight.");
//		});
//		
//		it("and ensures it is not earlier than 5pm",function(){
//			var expected = Babysitter(5,4,13);
//			expect(expected.bedtime).toEqual("Please reenter a valid bedtime.");
//		});
		
	});
		
	describe("receives pay",function(){

//		it("for riding herd for 1 hour",function(){
//			var expected = Babysitter(5,6,3);
//			expect(expected.pay).toEqual(10);
//		});
//		
//		it("for riding herd for 2 hours",function(){
//			var expected = Babysitter(5,7,3);
//			expect(expected.pay).toEqual(20);
//		});
//			
//		it("for riding herd for after kids go to bed, but before midnight hours",function(){
//			var expected = Babysitter(5,6,6);
//			expect(expected.pay).toEqual(8	);
//		});
	});	
});