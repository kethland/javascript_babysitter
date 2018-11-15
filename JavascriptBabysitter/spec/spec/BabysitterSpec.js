describe ("A Babysitter", function(){
	it("returns world", function(){
		var expected = Babysitter();
		expect(expected.pay).toEqual(1);
	})
})