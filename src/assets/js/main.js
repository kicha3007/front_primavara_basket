;

function DOMready() {

    let $cabinetPersonalDataBtn = $("[data-cabinet-personal-data-btn]");

    $("[data-cabinet-personal-data-input]").on("blur", function () {
        checkCabinetPersonalInput(this);


    });

    $cabinetPersonalDataBtn.on("click", function (e) {
        e.preventDefault();
        $("[data-cabinet-personal-data-input]").each(function (indx, item) {
            checkCabinetPersonalInput(item);
        });
        disabledEnabledBtnCabinetPersonal();

    });

    function checkCabinetPersonalInput(thisInput) {
        let $this = $(thisInput);
        let name = $this.data("cabinet-personal-data-input");
        let val = $this.val();

        switch (name) {
            case "name":
                if (val.length > 0 && !$this.hasClass("success")) {
                    setInputNoteTextAndStatus($this, "success", "Имя");

                } else if (!$this.hasClass("error")) {
                    setInputNoteTextAndStatus($this, "error", "Введите имя");

                }
                break;
            case "email":
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    setInputNoteTextAndStatus($this, "success", "Электронная почта");
                } else {
                    setInputNoteTextAndStatus($this, "error", "Введите корректный адрес электронной почты");

                }
                break;

            case "password":
                if (val.length > 5 && !$this.hasClass("success")) {
                    setInputNoteTextAndStatus($this, "success", "Пароль");

                } else if (!$this.hasClass("error")) {
                    setInputNoteTextAndStatus($this, "error", "Введите пароль, не меннее 6 символов");

        }
                break;

            case "password":
                if (val.length > 5 && !$this.hasClass("success")) {
                    setInputNoteTextAndStatus($this, "success", "Пароль");

                } else if (!$this.hasClass("error")) {
                    setInputNoteTextAndStatus($this, "error", "Введите пароль, не меннее 6 символов");
                }
                break;
            case "password-confirm":

                if (val == $("[data-cabinet-personal-data-input='password']").val() && !$this.hasClass("success") && val.length > 5) {

                    setInputNoteTextAndStatus($this, "success", "Пароль ещё раз");

                } else if (!$this.hasClass("error")) {
                    setInputNoteTextAndStatus($this, "error", "Пароли не совпадают");
                }
                break;

        }

        disabledEnabledBtnCabinetPersonal();

    }

    function disabledEnabledBtnCabinetPersonal() {

        if ($("[data-cabinet-personal-data-input-wrap].success").length == 4) {
            $cabinetPersonalDataBtn.removeClass("disabled").removeAttr("disabled", "disabled");


        } else {
            $cabinetPersonalDataBtn.addClass("disabled").attr("disabled", "disabled");

        }

    }

    function setInputNoteTextAndStatus(inputItem, status, text) {
        let inputWrap = inputItem.closest("[data-cabinet-personal-data-input-wrap]");
        inputWrap.addClass(status);
        inputWrap.next("[data-cabinet-personal-data-note]").text(text);

        if (status == "success") {
            inputWrap.removeClass("error");

        }

        if (status == "error") {
            inputWrap.removeClass("success");
        }

    }

}

document.addEventListener("DOMContentLoaded", DOMready);



