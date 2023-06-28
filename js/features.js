document.addEventListener('click', function(e) {
    if (e.target.classList.contains('feature')) {
        var featNum = e.target.classList[1].split('-')[1];

        var feat = document.querySelectorAll('.feat-' + featNum);
        for (var i = 0; i < feat.length; i++) {
            feat[i].classList.toggle('hidden');
        }

        var featHide = document.querySelectorAll('.feat-' + featNum + '-hide');
        for (var i = 0; i < featHide.length; i++) {
          featHide[i].classList.toggle('hidden');
        }

        e.target.classList.toggle('used');
    }
});