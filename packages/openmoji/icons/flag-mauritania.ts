import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagMauritaniaIcon],svg[openmoji-flag-mauritania-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v7H5zm0 31h62v7H5z"></svg:path><svg:path fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" d="M36 40.885a6.93 6.93 0 0 1-6.866-5.406A6.5 6.5 0 0 0 29 36.777a7.007 7.007 0 0 0 14 0a6.5 6.5 0 0 0-.134-1.298A6.93 6.93 0 0 1 36 40.885m-1.293-6.364l1.328-4l1.145 3.939L34 32.086l4-.099z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagMauritaniaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
