import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneInventory2Icon],svg[ic-twotone-inventory-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h16V3.98L4 4zm1 13h14V9H5zm4-8h6v2H9z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2m-1 18H5V9h14zm1-13H4V4l16-.02z"></svg:path><svg:path fill="currentColor" d="M9 12h6v2H9z"></svg:path>`,
})
export class IcTwotoneInventory2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
