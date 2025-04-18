import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpContactMailIcon],svg[ic-sharp-contact-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8V7l-3 2l-3-2v1l3 2zm3-5H0v18h23.99zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z"></svg:path>`,
})
export class IcSharpContactMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
