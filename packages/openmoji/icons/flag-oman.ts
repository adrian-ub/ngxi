import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagOmanIcon],svg[openmoji-flag-oman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 42h62v13H5z"></svg:path><svg:path fill="#fff" d="M5 17h62v13H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h16v38H5z"></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 23.917h5m-2.5 0v-4m4 .166l-4 4s-2 4-5 4"></svg:path><svg:path d="m9 20.083l4 4s2 4 5 4"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagOmanIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
