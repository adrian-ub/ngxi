import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExpandLessRoundedIcon],svg[material-symbols-light-expand-less-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.102l-4.246 4.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354l4.389-4.388q.13-.13.267-.184T12 9.015t.298.053t.268.184l4.388 4.388q.14.14.15.344t-.15.364t-.354.16t-.354-.16z"></svg:path>`,
})
export class MaterialSymbolsLightExpandLessRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
