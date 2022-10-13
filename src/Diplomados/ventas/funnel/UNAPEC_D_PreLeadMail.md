---
layout: layouts/demo_md.njk
permalink: Diplomados/ventas/funnel/UNAPEC_D_PreLeadMail.html
main_font: {family: "'Open Sans', Arial, Helvetica, sans-serif",size: "18px",lineHeight: "26px",align: "left",color: "#000000",weight: "medium"}
main_font2: {family: "'Open Sans', Arial, Helvetica, sans-serif",size: "14px",lineHeight: "24px",align: "left",color: "#000000",weight: "medium"}

---
{% import "template-parts/components/functions.njk" as function %}

{% call function.setTable({ singleColumn: true, addGutters: true, paddingSize: { left: "30", right: "30" }, paddingClass:"content-spacing-medium",background: { color: "#ffffff" } }) %}
{{ function.setSpacer(30) }}

{% set textAttrs ={
tableAttrs:{
align: "center"
},
font: main_font,
text: 'Hola, <b>$BF{nombre}</b>'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(20) }}
{% set textAttrs ={
tableAttrs:{
},
font: main_font2,
classAlign:"center",
text: 'Con el <b>$BF{Programa}</b> cubrirás por completo el perfil que tu profesión solicita.requiere Para que puedas lograrlo, nos ponemos a tus órdenes para resolver cualquier duda. Contáctanos. '
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}

{% set buttonAttrs = {
    tableAttrs: {
      background: { color: "#004993" },
      addGutters: true,
      singleColumn: true,
      width: "auto",
      align: "center",
      spacer: 12,
      border:{radius:"4px"}
    },
    font: {
      family: "Arial, sans-serif",
      align: "center",
      size: "13px",
      lineHeight: "20px",
      transform: "uppercase"
    },
    link: { 
      href: "#", 
      color: "white", 
      decoration: "none"
    },
    text: "<b>DESCARGA EL PLAN DE ESTUDIOS</b>"
  }%}
{% include "template-parts/fragments/button.njk" %}  
{{ function.setSpacer(30) }}
{% endcall %}
{% call function.setTable({ singleColumn: true, addGutters: true, paddingSize: { left: "30", right: "30" }, paddingClass:"content-spacing-medium",background: { color: "#ffffff" } }) %}
{{ function.setSpacer(30) }}

{% set textAttrs ={
tableAttrs:{
},
font: main_font2,
classAlign:"center",
text: 'Inscríbete al <b>$BF{Programa}</b> y comprueba que UNAPEC es la plataforma que te impulsa a ser candidato a las mejores oportunidades laborales. '
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}
{% set textAttrs ={
tableAttrs:{
align: "center"
},
font: main_font,
classAlign:"center",
text: '<b> ¿Cuál es el objetivo del programa?</b>'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(10) }}
{% set textAttrs ={
tableAttrs:{
},
font: main_font2,
classAlign:"center",
text: '$BF{Objetivo} '
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}
{% set textAttrs ={
tableAttrs:{
align: "center"
},
font: main_font,
classAlign:"center",
text: '<b> Habilidades a desarrollar </b>'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(10) }}
{% set textAttrs ={
tableAttrs:{
},
font: main_font2,
classAlign:"center",
text: '$BF{Habilidades} '
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
text: 'Para más información, comunícate con un asesor educativo.'
}%}
{% include "template-parts/fragments/text.njk" %}
{{ function.setSpacer(30) }}

{% set buttonAttrs = {
    tableAttrs: {
      background: { color: "#004993" },
      addGutters: true,
      singleColumn: true,
      width: "auto",
      align: "center",
      spacer: 12,
      border:{radius:"4px"}
    },
    font: {
      family: "Arial, sans-serif",
      align: "center",
      size: "13px",
      lineHeight: "20px",
      transform: "uppercase"
    },
    link: { 
      href: "tel:+18299542208", 
      color: "white", 
      decoration: "none"
    },
    text: "<b>Quiero más información</b>"
  }%}
{% include "template-parts/fragments/button.njk" %}  
{{ function.setSpacer(30) }}
{% set buttonAttrs = {
    tableAttrs: {
      background: { color: "#D72438" },
      addGutters: true,
      singleColumn: true,
      width: "auto",
      align: "center",
      spacer: 11,
      border:{radius:"4px"}
    },
    font: {
      family: "Arial, sans-serif",
      align: "center",
      size: "13px",
      lineHeight: "20px",
      transform: "uppercase"
    },
     rightImage: {
        url: "https://pnggrid.com/wp-content/uploads/2021/05/WhatsApp-logo-png-White.png",
        width: 24,
        heigh: 24
    },
    link: { 
      href: "https://api.whatsapp.com/send?phone=18299462272&text=Hola,%20quisiera%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20inscripci%C3%B3n%20a%20los%20programas%20de%20la%20UNAPEC.", 
      color: "white", 
      decoration: "none"
    },
    text: "<b>CONTÁCTANOS</b>"
  }%}
{% include "template-parts/fragments/button.njk" %} 
{{ function.setSpacer(30) }}
{% endcall %}