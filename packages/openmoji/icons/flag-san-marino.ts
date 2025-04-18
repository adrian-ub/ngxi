import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSanMarinoIcon],svg[openmoji-flag-san-marino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiFlagSanMarino0" fill="#61b2e4" d="M41 31a7.2 7.2 0 0 1 2 5a10.044 10.044 0 0 1-7 10a10.044 10.044 0 0 1-7-10a7.2 7.2 0 0 1 2-5"></svg:path></svg:defs><svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#61b2e4" d="M5 36h62v19H5z"></svg:path><svg:use href="#openmojiFlagSanMarino0"></svg:use><svg:use href="#openmojiFlagSanMarino0"></svg:use><svg:path fill="#fcea2b" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 22v8"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 28a3 3 0 0 1 3-3c1.657 0 4.14 1.473 2 6H31c-2.14-4.527.343-6 2-6a3 3 0 0 1 3 3"></svg:path><svg:path fill="none" stroke="#6a462f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 35v6"></svg:path><svg:path fill="#5c9e31" d="M29.67 40A10.03 10.03 0 0 0 36 46a10.03 10.03 0 0 0 6.33-6Z"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41 31a7.2 7.2 0 0 1 2 5a10.044 10.044 0 0 1-7 10a10.044 10.044 0 0 1-7-10a7.2 7.2 0 0 1 2-5"></svg:path><svg:path fill="none" stroke="#186648" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41 47c3.348-1.738 6-6.228 6-11a13 13 0 0 0-1.066-5M31 47c-3.348-1.738-6-6.228-6-11a13 13 0 0 1 1.066-5"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m43 49l-2-2H31l-2 2"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSanMarinoIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
