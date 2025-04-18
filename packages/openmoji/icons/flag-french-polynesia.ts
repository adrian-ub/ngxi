import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagFrenchPolynesiaIcon],svg[openmoji-flag-french-polynesia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v9H5zm0 29h62v9H5z"></svg:path><svg:path fill="#92d3f5" stroke="#92d3f5" stroke-linejoin="round" stroke-width=".933" d="M42 36a7 7 0 0 1-14 0"></svg:path><svg:path fill="#f4aa41" stroke="#f4aa41" stroke-linejoin="round" stroke-width=".933" d="M28 36a7 7 0 0 1 14 0"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linejoin="round" d="M36.542 31s-3.167 0-3.167 2.111v3.167l3.167 1.583V33.64s-2.111-.528 0-2.639Z"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M33 39.58s-1.044.696-1.74 0l.05-4.82m5.95 4.82s1.044.696 1.74 0l-.05-4.82"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagFrenchPolynesiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
