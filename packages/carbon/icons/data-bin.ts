import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataBinIcon],svg[carbon-data-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2h-8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 2v7h-8V4zm0 9v6h-8v-6zm-8 15v-7h8v7zm-8-13h-2v-2H8v2H6v2h2v2h2v-2h2z"></svg:path><svg:path fill="currentColor" d="M16 6V4h-6a2 2 0 0 0-2 2v3.08a6.99 6.99 0 0 0 0 13.84V26a2 2 0 0 0 2 2h6v-2h-6v-3.08a6.99 6.99 0 0 0 0-13.84V6Zm-2 10a5 5 0 1 1-5-5a5.006 5.006 0 0 1 5 5"></svg:path>`,
})
export class CarbonDataBinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
