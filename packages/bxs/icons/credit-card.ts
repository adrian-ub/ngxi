import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCreditCardIcon],svg[bxs-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v2h20V6c0-1.103-.897-2-2-2M2 18c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6H2zm3-3h6v2H5z"></svg:path>`,
})
export class BxsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
