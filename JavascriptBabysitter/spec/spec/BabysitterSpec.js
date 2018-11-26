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
});