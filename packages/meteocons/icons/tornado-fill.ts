import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsTornadoFillIcon],svg[meteocons-tornado-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsTornadoFill0" x1="220" x2="292" y1="97.7" y2="222.3" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsTornadoFill1" x1="224" x2="288" y1="152.6" y2="263.4" href="#meteoconsTornadoFill0"></svg:lineargradient><svg:lineargradient id="meteoconsTornadoFill2" x1="229" x2="283" y1="209.2" y2="302.8" href="#meteoconsTornadoFill0"></svg:lineargradient><svg:lineargradient id="meteoconsTornadoFill3" x1="234" x2="278" y1="265.9" y2="342.1" href="#meteoconsTornadoFill0"></svg:lineargradient><svg:lineargradient id="meteoconsTornadoFill4" x1="242" x2="270" y1="327.8" y2="376.3" href="#meteoconsTornadoFill0"></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsTornadoFill0)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M136 160h240"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-12 0; 12 0; -12 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsTornadoFill1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M152 208h208"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsTornadoFill2)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M172 256h168"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-36 0; 36 0; -36 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsTornadoFill3)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M192 304h128"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-48 0; 48 0; -48 0"></svg:animatetransform></svg:path><svg:path fill="none" stroke="url(#meteoconsTornadoFill4)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M224 352h64"><svg:animatetransform additive="sum" attributeName="transform" calcMode="spline" dur="3s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="translate" values="-60 0; 60 0; -60 0"></svg:animatetransform></svg:path>`,
})
export class MeteoconsTornadoFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
