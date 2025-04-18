import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdLightDarkLoopIcon],svg[line-md-light-dark-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="lineMdLightDarkLoop0"><svg:circle cx="7.5" cy="7.5" r="5.5" fill="#fff"></svg:circle><svg:circle cx="7.5" cy="7.5" r="5.5"><svg:animate fill="freeze" attributeName="cx" dur="0.4s" values="7.5;11"></svg:animate><svg:animate fill="freeze" attributeName="r" dur="0.4s" values="5.5;6.5"></svg:animate></svg:circle></svg:mask><svg:mask id="lineMdLightDarkLoop1"><svg:g fill="#fff"><svg:circle cx="12" cy="9" r="5.5"><svg:animate fill="freeze" attributeName="cy" begin="1s" dur="0.5s" values="9;15"></svg:animate></svg:circle><svg:g fill-opacity="0"><svg:use href="#lineMdLightDarkLoop2" transform="rotate(-75 12 15)"></svg:use><svg:use href="#lineMdLightDarkLoop2" transform="rotate(-25 12 15)"></svg:use><svg:use href="#lineMdLightDarkLoop2" transform="rotate(25 12 15)"></svg:use><svg:use href="#lineMdLightDarkLoop2" transform="rotate(75 12 15)"></svg:use><svg:set fill="freeze" attributeName="fill-opacity" begin="1.5s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="5s" repeatCount="indefinite" type="rotate" values="0 12 15;50 12 15"></svg:animatetransform></svg:g></svg:g><svg:path d="M0 10h26v5h-26z"></svg:path><svg:path stroke="#fff" stroke-dasharray="26" stroke-dashoffset="26" stroke-width="2" d="M22 12h-22"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M22 12h-22;M24 12h-22;M22 12h-22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="26;0"></svg:animate></svg:path></svg:mask><svg:symbol id="lineMdLightDarkLoop2"><svg:path d="M11 18h2L12 20z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1.5s" dur="0.4s" values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1.5s" to="1"></svg:set></svg:path></svg:symbol></svg:defs><svg:g fill="currentColor"><svg:rect width="13" height="13" x="1" y="1" mask="url(#lineMdLightDarkLoop0)"></svg:rect><svg:path d="M-2 11h28v13h-28z" mask="url(#lineMdLightDarkLoop1)" transform="rotate(-45 12 12)"></svg:path></svg:g>`,
})
export class LineMdLightDarkLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
