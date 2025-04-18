import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSellIcon],svg[ic-twotone-sell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v7.17L12.83 20L20 12.83L11.17 4zm2.5 4C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5S8 5.67 8 6.5S7.33 8 6.5 8" opacity=".3"></svg:path><svg:path fill="currentColor" d="m21.41 11.41l-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83M12.83 20L4 11.17V4h7.17L20 12.83z"></svg:path><svg:circle cx="6.5" cy="6.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneSellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
