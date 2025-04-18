import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNavigationOutlineIcon],svg[material-symbols-navigation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 21l-1-1l8-18l8 18l-1 1l-7-3zm2.1-3.1l4.9-2.1l4.9 2.1l-4.9-11zm4.9-2.1"></svg:path>`,
})
export class MaterialSymbolsNavigationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
