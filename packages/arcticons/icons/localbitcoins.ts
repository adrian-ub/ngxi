import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLocalbitcoinsIcon],svg[arcticons-localbitcoins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.2 25.988L24 43.504l11.733-17.7m-10.858-7.288a2.692 2.692 0 0 1 0 5.383h-4.442V13.133h4.442a2.692 2.692 0 1 1 0 5.383m0 0h-4.44m2.855 5.438v1.355m0-13.65v1.416"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="3.969 3.969" stroke-linecap="round" stroke-linejoin="round" d="M37.864 18.405a13.9 13.9 0 0 1-13.9 13.9c-18.44-.731-18.435-27.072 0-27.801a13.9 13.9 0 0 1 13.9 13.9"></svg:path>`,
})
export class ArcticonsLocalbitcoinsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
