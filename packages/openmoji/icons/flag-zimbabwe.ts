import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagZimbabweIcon],svg[openmoji-flag-zimbabwe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 17h62v38H5z"></svg:path><svg:path fill="#5c9e31" d="M5 49h62v6H5z"></svg:path><svg:path fill="#f1b31c" d="M5 44h62v5H5z"></svg:path><svg:path fill="#d22f27" d="M5 39h62v5H5z"></svg:path><svg:path fill="#5c9e31" d="M5 17h62v6H5z"></svg:path><svg:path fill="#f1b31c" d="M5 23h62v5H5z"></svg:path><svg:path fill="#d22f27" d="M5 28h62v5H5z"></svg:path><svg:path fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M26 36L5 55V17z"></svg:path><svg:path fill="#d22f27" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width=".54" d="M15.266 35.67L19 32.795l-4.536.112l-1.298-4.466l-1.506 4.536l-4.537.112l3.606 2.691l-.974 2.935a2.3 2.3 0 0 1 1.08.362l2.123-1.633l3.606 2.692Z"></svg:path><svg:path fill="#fcea2b" d="M10.701 30.94a.885.885 0 0 0-1.424.7v8.743a.885.885 0 0 0 .885.885h6.047a.885.885 0 0 0 .885-.885v-4.09a.89.89 0 0 0-.345-.702Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagZimbabweIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
