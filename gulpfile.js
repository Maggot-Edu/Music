const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {
   
    src('src/scss/**/*.scss')     // Identificar el archivo SASS
        .pipe(sass())           //Compilarlo
        .pipe(dest("build/css")); //Almacenarla en el Disco Duro


    done(); //callback finaliza a gulpcuando llega al final
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;