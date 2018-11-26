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
});