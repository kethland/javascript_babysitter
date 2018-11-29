describe ("A Babysitter", function(){
	describe("it accepts an arrival time" , function(){
		it("of 1 and returns it.", function(){
			var expected = Babysitter(1);
			expect(expected.arrival).toEqual(1);
		});
		it("of 2 and returns it.", function(){
			var expected = Babysitter(2);
			expect(expected.arrival).toEqual(2);
		});
	});
	describe("it accepts a departure time",function(){

		it("of 2 and returns it.",function(){
			var expected = Babysitter(1,2);
			expect(expected.departure).toEqual(2);
		});
		it("of 4 and returns it.",function(){
			var expected = Babysitter(1,4);
			expect(expected.departure).toEqual(4);
		});
	});
	describe("it accepts a bedtime",function(){

		it("of 3 and returns it.",function(){
			var expected = Babysitter(1,2,3);
			expect(expected.bedtime).toEqual(3);
		});
		it("of 6 and returns it.",function(){
			var expected = Babysitter(1,4,6);
			expect(expected.bedtime).toEqual(6);
		});
		it("will not allow bedtimes of midnight",function(){
			var expected = Babysitter(1,4,12);
			expect(expected.pay).toEqual("Please reenter a valid bedtime.");
		});
	});
	describe("when given a babysitters arrival and departure times",function(){

		it("it will return the difference",function(){
			var expected = Babysitter(1,4,3);
			expect(expected.pay).toEqual(3);
		});
	});	
});