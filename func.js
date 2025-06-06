function calcula_salario() {
    const valorHora = parseFloat(document.getElementById('valorHora').value);
    const qtdhora = parseFloat(document.getElementById('qtdhora').value);
    const descontoVale = document.getElementById('descontoVale').value;
    const deducoes = parseFloat(document.getElementById('deducoes').value) || 0;

    const salarioBruto = valorHora * qtdhora;

    const deducaoValeTrans = descontoVale === 'S' ? salarioBruto * 0.06 : 0;

    let inss=0;
    if(salarioBruto <=1320) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2571.29) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 3856.94) {
        inss = salarioBruto * 0.12;
    } else if (salarioBruto <= 7507.49) {
        inss = salarioBruto * 0.14;
    } else {
        inss = salarioBruto * 0.14;
    }

    let irpf=0;
    salarioIrpf = salarioBruto - inss;

    if(salarioBruto <=2112.00) {
        irpf = salarioIrpf * 0.0;
    } else if (salarioBruto <= 2826.65) {
        irpf = salarioIrpf * 0.075 - deducaoValeTrans;
    } else if (salarioBruto <= 3751.05) {
        irpf = salarioIrpf * 0.15 - deducaoValeTrans;
    } else if (salarioBruto <= 4664.68) {
        irpf = salarioIrpf * 0.225 - deducaoValeTrans;
    } else {
        irpf = salarioIrpf * 0.275 - deducaoValeTrans;
    }

    const salarioLiquido = salarioBruto - deducaoValeTrans - deducoes - inss - irpf ;

    document.getElementById('salarioBruto').textContent = salarioBruto.toFixed(2);
    document.getElementById('inss').textContent = inss.toFixed(2);
    document.getElementById('irpf').textContent = irpf.toFixed(2);   
    document.getElementById('deducaoValeTrans').textContent = deducaoValeTrans.toFixed(2);
    document.getElementById('deducoesResult').textContent = deducoes.toFixed(2);
    document.getElementById('salarioLiquido').textContent = salarioLiquido.toFixed(2);

    document.getElementById('resultado').style.display = 'block';
}