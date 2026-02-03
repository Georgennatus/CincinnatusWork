function insert_value(x) {
    document.getElementById('display').value += x;
};

function deletedisplay(y) {
    document.getElementById('display').value = y
};

function cal_result() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}