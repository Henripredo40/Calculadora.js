const express = require("express");
const app = express();

app.use(express.json());

app.post("/calculadora", (req, res) => {

    const { operacao, num1, num2 } = req.body;

    if (operacao === "divisao") {

        if (num2 === 0) {
            return res.status(400).json({
                erro: "Divisão por zero não permitida"
            });
        }

        return res.status(200).json({
            resultado: num1 / num2
        });
    }

    if (operacao === "multiplicacao") {

        return res.status(200).json({
            resultado: num1 * num2
        });
    }

    return res.status(400).json({
        erro: "Operação inválida"
    });

});

app.listen(3000, () => {

    console.log("API Calculadora rodando na porta 3000");

});
