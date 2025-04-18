import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowUpwardAltRoundedIcon],svg[material-symbols-light-arrow-upward-alt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 7.416l-3.746 3.746q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354l4.389-4.388q.242-.243.565-.243t.566.243l4.388 4.388q.14.14.15.344t-.15.364t-.354.16t-.354-.16L12.5 7.416v9.392q0 .213-.143.357t-.357.143t-.357-.144t-.143-.356z"></svg:path>`,
})
export class MaterialSymbolsLightArrowUpwardAltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
