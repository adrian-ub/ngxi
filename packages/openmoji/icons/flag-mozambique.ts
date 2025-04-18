import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagMozambiqueIcon],svg[openmoji-flag-mozambique-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M5 17h62v38H5z"></svg:path><svg:path fill="#186648" d="M5 17h62v13H5z"></svg:path><svg:path stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M5 30h62v12H5z"></svg:path><svg:path fill="#d22f27" d="M26 36L5 55V17z"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" d="m10.004 41.409l3.589-10.818l3.096 10.654l-8.598-6.42l10.818-.266z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16.869 38.804h-6.738l.902-3.219h4.934z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.934 40.121l7.328-7.341m-5.524 0l7.328 7.341"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagMozambiqueIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
