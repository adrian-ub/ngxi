import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStatMinus1RoundedIcon],svg[material-symbols-light-stat-minus-1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.373q-.161 0-.298-.053t-.267-.184L7.046 9.749q-.14-.14-.153-.341t.153-.366q.16-.16.354-.16t.354.16L12 13.28l4.246-4.24q.14-.141.342-.153t.366.153q.16.159.16.353t-.16.354l-4.389 4.389q-.13.13-.267.183q-.136.053-.298.053"></svg:path>`,
})
export class MaterialSymbolsLightStatMinus1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
