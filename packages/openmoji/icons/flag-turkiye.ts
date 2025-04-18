import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagTurkiyeIcon],svg[openmoji-flag-turkiye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m40.64 33.05l3.052 4.019l-4.934-1.532l4.932-1.541l-3.046 4.025l-.004-4.972M31.29 44.64a8.643 8.643 0 1 1 3.958-16.34a11 11 0 1 0 0 15.38a8.7 8.7 0 0 1-3.958.95z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagTurkiyeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
