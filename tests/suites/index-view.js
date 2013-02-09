var t = casper.test,
    baseUrl = "http://localhost:8080/";

casper.start();

casper
    .describe("Index page")
    .thenOpen(baseUrl)
    .assertAtIndexView()
    .then(function() {
        t.assertTitle("GapVis: Visual Interface for Reading Ancient Texts", 
            "Loaded application");
        t.assertText("h2", "Overview",
            "Index page title is visible");
        t.assertEvalEquals(function() { return $('div.book-list p').length }, 2,
            "Two books were found");
        t.assertText('div.book-list p span', 'The Works of Cornelius Tacitus: The History',
            "The first book has the right title");
    });
    
casper
    .describe("Index page > Book Links")
    .thenOpen(baseUrl)
    .assertAtIndexView()
    .then(function() {
        this.click('div.book-list p span');
    })
    .assertAtBookSummaryView()
    .back()
    .assertAtIndexView();

casper.run(function() {
    t.done();
});