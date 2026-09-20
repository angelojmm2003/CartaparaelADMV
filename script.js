/* =========================
   CAMBIAR DE PANTALLA
========================= */

function siguiente(id) {

    document
        .querySelectorAll(".pantalla")
        .forEach(function(pantalla) {

            pantalla.classList.remove("activa");

        });

    document
        .getElementById(id)
        .classList.add("activa");

    flores();

}


/* =========================
   ESCUCHAR ADMV
========================= */

function escucharCancion() {

    const spotify =
        "https://open.spotify.com/track/4j3iq13kHs5PB94jdTp3Y3";

    const youtube =
        "https://www.youtube.com/watch?v=lNBSdFw0t_w";

    const opcion = confirm(

        "🎵 ADMV — Maluma\n\n" +

        "Aceptar → Spotify\n\n" +

        "Cancelar → YouTube"

    );

    if (opcion) {

        window.open(
            spotify,
            "_blank"
        );

    } else {

        window.open(
            youtube,
            "_blank"
        );

    }

}


/* =========================
   ABRIR REGALO
========================= */

function abrirRegalo() {

    siguiente("final");

    flores();

}


/* =========================
   FLORES
========================= */

function flores() {

    const simbolos = [
        "🌼",
        "🌸",
        "🌷",
        "🤍"
    ];

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        const flor =
            document.createElement("div");

        flor.className =
            "flor";

        flor.innerHTML =
            simbolos[
                Math.floor(
                    Math.random()
                    * simbolos.length
                )
            ];

        flor.style.left =
            Math.random() * 100 + "%";

        flor.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        document.body.appendChild(flor);

        setTimeout(
            function() {

                flor.remove();

            },
            8000
        );

    }

}