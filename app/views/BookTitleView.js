/*
 * Book Title View
 */
define(['gv', 'views/BookView'], function(gv, BookView) {
    var state = gv.state;
    
    // View: BookTitleView (title and metadata)
    return BookView.extend({
        template: '#book-title-template',
        
        render: function() {
            var view = this;
            view.renderTemplate();
            view.$('h2.book-title')
                .toggleClass('on', state.get('view') != 'book-summary');
            return view;
        },
        
        // UI event handlers
        
        events: {
            "click h2.book-title":      "uiGoToSummary"
        },
        
        uiGoToSummary: function() {
            state.set({ 'view': 'book-summary' });
        }
    });
    
});