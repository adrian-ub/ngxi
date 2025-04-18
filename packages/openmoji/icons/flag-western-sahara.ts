import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagWesternSaharaIcon],svg[openmoji-flag-western-sahara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5c9e31" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M5 30h62v12H5z"></svg:path><svg:path d="M5 17h62v13H5z"></svg:path><svg:path fill="#d22f27" d="M26 36L5 55V17z"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M35.122 36a4.05 4.05 0 0 1 3.378-3.924a4.4 4.4 0 0 0-.81-.076a4.004 4.004 0 1 0 0 8a4.4 4.4 0 0 0 .81-.076A4.05 4.05 0 0 1 35.122 36"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="m38.707 38l1.328-4l1.145 3.939L38 35.565l4-.098z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagWesternSaharaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
