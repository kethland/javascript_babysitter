describe ("A Babysitter", function(){
	
	describe("it accepts an arrival time" , function(){
		
		it("of 1 and denys it.", function(){
			var expected = Babysitter(1);
			expect(expected.arrival).toEqual("You cannot arrive until 5 pm.");
		});
		
		it("of 2 and denies it.", function(){
			var expected = Babysitter(2);
			expect(expected.arrival).toEqual("You cannot arrive until 5 pm.");
		});
		
		it("of 5 and normalizes it.", function(){
			var expected = Babysitter(5);
			expect(expected.arrival).toEqual(17);
		});	
		
	});
	describe("it accepts a departure time",function(){

		it("of 2 and returns it.",function(){
			var expected = Babysitter(5,2);
			expect(expected.departure).toEqual(2);
		});
				
		it("of 4 and denies it.",function(){
			var expected = Babysitter(5,4);
			expect(expected.departure).toEqual("Must leave by 4 am.");
		});
		
		it("of 5 and denies it.",function(){
			var expected = Babysitter(5,5);
			expect(expected.departure).toEqual("Must leave by 4 am.");
		});
		
	});
	describe("it accepts a bedtime",function(){

		it("of 3 and returns it.",function(){
			var expected = Babysitter(5,2,3);
			expect(expected.bedtime).toEqual(3);
		});
		
		it("of 6 and returns it.",function(){
			var expected = Babysitter(5,4,6);
			expect(expected.bedtime).toEqual(6);
		});
		
		it("and ensures it is not midnight",function(){
			var expected = Babysitter(5,4,12);
			expect(expected.pay).toEqual("Please reenter a valid bedtime.");
		});
		
//		it("and ensures it is not greater than 12",function(){
//			var expected = Babysitter(5,4,13);
//			expect(expected.pay).toEqual("Please reenter a valid bedtime.");
//		});
//		
//		it("and ensures it is not earlier than 5pm",function(){
//			var expected = Babysitter(5,4,13);
//			expect(expected.pay).toEqual("Please reenter a valid bedtime.");
//		});
		
	});
	describe("when given a babysitters arrival and departure times",function(){

		it("of 5pm and 6pm it returns one hour",function(){
			var expected = Babysitter(5,6,3);
			expect(expected.pay).toEqual(1);
		});
		
		it("of 5pm and midnight it returns 7 hours",function(){
			var expected = Babysitter(5,12,3);
			expect(expected.pay).toEqual(7);
		});
	});	
});