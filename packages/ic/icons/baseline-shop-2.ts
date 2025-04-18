import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineShop2Icon],svg[ic-baseline-shop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9H1v11c0 1.11.89 2 2 2h16v-2H3z"></svg:path><svg:path fill="currentColor" d="M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm0 12V8l5.5 3.5z"></svg:path>`,
})
export class IcBaselineShop2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
