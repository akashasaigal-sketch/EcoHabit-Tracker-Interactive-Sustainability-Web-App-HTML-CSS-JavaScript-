let pts = 0;
const tree = document.getElementById('tree');
const levels = [[0,"Withered"], [10,"Sprout"], [60, "Sapling"], [150,"Tree"], [300,"Giant"], [500,"Ancient"]];

function updateTree(points){
    pts = Math.max(0, pts + points);

    document.getElementById('pts').textContent = pts;

    tree.style.width = `${Math.min(240, Math.max(70, 70 + (pts * 0.5)))}px`;

    tree.classList.remove('damage');

    if(points < 0) { void tree.offsetWidth; tree.classList.add('damage');}

    let lvl = levels[0][1];
    for(let i = levels.length - 1; i >= 0; i--){
        if (pts >= levels[i][0]) {
            lvl = levels[i][1];
            break;
        }
    }
    document.getElementById('lvl').textContent = lvl;
}