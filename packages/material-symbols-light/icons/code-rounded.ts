import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCodeRoundedIcon],svg[material-symbols-light-code-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.114 12.006l4.24 4.24q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16l-4.388-4.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298t.184-.267l4.388-4.389q.146-.146.347-.156t.366.156t.166.357t-.165.357zm15.773-.012l-4.24-4.24q-.141-.14-.15-.344t.15-.364t.353-.16t.354.16l4.388 4.389q.131.13.184.267t.053.298t-.053.298t-.184.268l-4.388 4.388q-.146.146-.344.153q-.198.006-.364-.159t-.165-.357q0-.191.165-.357z"></svg:path>`,
})
export class MaterialSymbolsLightCodeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
