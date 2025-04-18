import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagGhanaIcon],svg[openmoji-flag-ghana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fcea2b" d="M5 30h62v12H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v13H5z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m33.528 39.723l2.539-7.446l2.189 7.332l-6.081-4.418l7.65-.184z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagGhanaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
