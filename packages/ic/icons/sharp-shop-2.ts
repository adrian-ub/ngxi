import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpShop2Icon],svg[ic-sharp-shop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9H1v13h18v-2H3z"></svg:path><svg:path fill="currentColor" d="M18 5V1h-8v4H5v13h18V5zm-6-2h4v2h-4zm0 12V8l5.5 3.5z"></svg:path>`,
})
export class IcSharpShop2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
