import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitDogecoinIcon],svg[formkit-dogecoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.72 1.5H4V6H2l-.04 2H4v4.5h3.91c1.68 0 2.08-.2 2.89-.59c.06-.03.13-.06.2-.1c.95-.46 1.69-1.1 2.21-1.92c.53-.83.79-1.79.79-2.89s-.26-2.06-.79-2.89S11.95 2.64 11 2.18S8.96 1.5 7.72 1.5M6.75 8v2.41h.83c1.14 0 2.05-.31 2.73-.92q1.02-.915 1.02-2.49c0-1.575-.34-1.88-1.02-2.49s-1.59-.92-2.73-.92h-.83V6h2.58v2z"></svg:path>`,
})
export class FormkitDogecoinIcon {
  readonly viewBox = input("0 0 16 14")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
