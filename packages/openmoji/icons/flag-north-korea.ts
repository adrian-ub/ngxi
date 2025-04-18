import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagNorthKoreaIcon],svg[openmoji-flag-north-korea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:circle cx="22.587" cy="36.013" r="8.5" fill="#fff"></svg:circle><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="m19.122 41.513l3.506-11l3.293 10.929l-8.834-6.684l11-.115z"></svg:path><svg:path fill="#1e50a0" stroke="#fff" stroke-miterlimit="10" d="M5 49h62v6H5zm0-32h62v6H5z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagNorthKoreaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
