$(document).ready(function() {

    $('#telefone').mask('(00)00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 14
            },
            cpf: {
                required: true,
                minlength: 14
            },
            cep: {
                required: true,
                minlength: 9
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu e-mail.',
            telefone: 'Por favor, insira o seu número de telefone.',
            cpf: 'Por favor, insira o seu CPF.',
            cep: 'Por favor, insira o seu CEP.',
            endereco: 'Por favor, insira o seu endereço completo.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Um total de ${camposIncorretos} campos não foram inseridos corretamente. Confira as informações preenchidas e tente novamente.`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})