import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStat1RoundedIcon],svg[material-symbols-light-stat-1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.108l-4.246 4.24q-.14.14-.341.153t-.367-.153q-.16-.16-.16-.354t.16-.354l4.389-4.388q.13-.13.267-.184T12 9.015t.298.053t.268.184l4.388 4.388q.14.14.153.342t-.153.366q-.16.16-.354.16t-.354-.16z"></svg:path>`,
})
export class MaterialSymbolsLightStat1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
