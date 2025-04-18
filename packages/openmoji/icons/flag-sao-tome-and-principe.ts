import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagSaoTomeAndPrincipeIcon],svg[openmoji-flag-sao-tome-and-principe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b1cc33" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fcea2b" d="M5 30h62v12H5z"></svg:path><svg:path fill="#d22f27" d="M26 36L5 55V17z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m38.5 33.59l1.545 5L36 35.5h5l-4.045 3.09zm15 0l1.545 5L51 35.5h5l-4.045 3.09z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagSaoTomeAndPrincipeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
