chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "courseCounts") {
        var authors = $('.author a');
        authors = $.makeArray(authors);
        console.log("fsdfasdf");
        console.log(authors);
        var hist = {};
        authors.map(function (a) {
            if (a.title in hist) {
                console.log (a);
                hist[a.title]++;
            } else {
                hist[a.title] = 1;
                console.log (a);
            }
        });
        console.log ("hist :" +hist);

        for (var a in hist) {
            console.log (a);
            var aName = '"' + a + '"';
            var links = $('.author a[title=' + aName + ']');
            console.log("asdfas");
            console.log (links);
            $.each(links, function (i, v) {
                v.innerText = a + ' - ' + hist[a]
            });
        }
    }

    if (request.action == "makeSortable") {
        $('.course').dataTable({ "bPaginate": false });
    }
});

chrome.runtime.sendMessage({ action: "show" });