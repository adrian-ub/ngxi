import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpTableRestaurantIcon],svg[ic-sharp-table-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.33 11l-2-7H3.67l-2 7H5.2L4 20h2l.67-5h10.67l.66 5h2l-1.2-9zm-15.4 2l.27-2h9.6l.27 2z"></svg:path>`,
})
export class IcSharpTableRestaurantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
