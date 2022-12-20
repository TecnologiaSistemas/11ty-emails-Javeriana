---
layout: layouts/demo_md.njk
permalink: Generico/ventas/funnel/PUJ_G_PreLeads_DescargaPlandeEstudios.html
main_font: {family: "'Open Sans', Arial, Helvetica, sans-serif",size: "24px",lineHeight: "28px",align: "left",color: "#2c5697",weight: "medium"}
main_font2: {family: "'Open Sans', Arial, Helvetica, sans-serif",size: "14px",lineHeight: "22px",align: "left",color: "#000000",weight: "medium"}

---
{% import "template-parts/components/functions.njk" as function %}

{% call function.setTable({ singleColumn: true, addGutters: true, paddingSize: { left: "30", right: "30" }, paddingClass:"content-spacing-medium",background: { color: "#ffffff" } }) %}
{{ function.setSpacer(30) }}

{% set textAttrs ={
tableAttrs:{
align: "center"
},
font: main_font,
text: '¡Hola, <b>$BF{nombre}</b>!'
}%}
{% include "template-parts/fragments/text.njk" %}

{% set textAttrs ={
tableAttrs:{
},
font: main_font,
text: '<hr class="hr-center" width="40" noshade="" size="8" color="#f8cd00" style="margin-left:0;">'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(20) }}
{% set textAttrs ={
tableAttrs:{
},
font: main_font2,
classAlign:"center",
text: 'Agradecemos tu interés por nuestro <b>$BF{Programa}.</b> Nos gustaría platicarte más sobre él y resolverte cualquier duda que tengas. Por favor, contáctanos y con gusto te damos toda la información que solicites.'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}

{% set buttonAttrs = {
    tableAttrs: {
      background: { color: "#920552" },
      addGutters: true,
      singleColumn: true,
      width: "auto",
      align: "center",
      spacer: 11,
      border:{radius:"30px"}
    },
    font: {
      family: "Arial, sans-serif",
      align: "center",
      size: "14px",
      lineHeight: "20px"
    },
    link: { 
      href: "#", 
      color: "white", 
      decoration: "none"
    },
    text: "<b>Descargar el plan de estudios</b>"
  }%}
{% include "template-parts/fragments/button.njk" %} 
{{ function.setSpacer(30) }}
{% endcall %}
{% call function.setTable({ singleColumn: true, addGutters: true, paddingSize: { left: "30", right: "30" }, paddingClass:"content-spacing-medium",background: { color: "#ffffff" } }) %}

{% set textAttrs ={
tableAttrs:{
},
font: main_font2,
classAlign:"center",
text: 'Nuestro <b>$BF{Programa}</b> 100% virtual te ofrece una formación profesional de vanguardia.
Aprende de expertos en menor tiempo y desde cualquier lugar.'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}

{% set textAttrs ={
tableAttrs:{
align: "center"
},
font: main_font,
classAlign:"center",
text: '<b>Al finalizar este programa, podrás: </b>'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}
{% set textAttrs ={
tableAttrs:{
},
font: main_font2,
classAlign:"center",
text: '$BF{Objetivo} '
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}


{% endcall %}

{% call function.setTable({ singleColumn: true, addGutters: true, paddingSize: { left: "30", right: "30" }, paddingClass:"content-spacing-medium",background: { color: "#F5F5F5" } }) %}
{{ function.setSpacer(30) }}
{% set textAttrs ={
tableAttrs:{
},
font: main_font2,
classAlign:"center",
text: 'Cambia hoy el rumbo de tu carrera profesional e inscríbete<br>Si deseas, puedes contactarnos y un asesor responderá todas tus dudas'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}

{% set buttonAttrs = {
    tableAttrs: {
      background: { color: "#EC660C" },
      addGutters: true,
      singleColumn: true,
      width: "auto",
      align: "center",
      spacer: 11,
      border:{radius:"30px"}
    },
    font: {
      family: "Arial, sans-serif",
      align: "center",
      size: "14px",
      lineHeight: "20px"
    },
     leftImage: {
        url: "https://virtual.javerianacali.edu.co/file/img/icon_phone.png",
        width: 24,
        heigh: 24
    },
    link: { 
      href: "tel:+576015938718", 
      color: "white", 
      decoration: "none"
    },
    text: "<b>Quiero más información</b>"
  }%}
{% include "template-parts/fragments/button.njk" %}  
{{ function.setSpacer(30) }}
{% set buttonAttrs = {
    tableAttrs: {
      background: { color: "#920552" },  
      addGutters: true,
      singleColumn: true,
      width: "auto",
      align: "center",
      spacer: 11,
      border:{radius:"30px"}
    },
    font: {
      family: "Arial, sans-serif",
      align: "center",
      size: "14px",
      lineHeight: "20px"
    },
     leftImage: {
        url: "https://virtual.javerianacali.edu.co/file/img/icon_whatsapp.png",
        width: 24,
        heigh: 24
    },
    link: { 
      href: "https://api.whatsapp.com/send?phone=573330333376&text=Hola,%20quiero%20saber%20m%C3%A1s%20de%20los%20programas%20de%20Javeriana%20virtual.", 
      color: "white", 
      decoration: "none"
    },
    text: "<b>Contáctanos</b>"
  }%}
{% include "template-parts/fragments/button.njk" %} 
{{ function.setSpacer(30) }}
{% endcall %}