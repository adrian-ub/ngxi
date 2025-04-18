import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForestIcon],svg[material-symbols-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22v-3h4v3zm-6 0v-4H0l3.85-6H2L9 2l7 10h-1.85l3.875 6H11v4zm12.25-4L16 13h1.925l-5.3-7.575L15 2l7 10h-1.85L24 18z"></svg:path>`,
})
export class MaterialSymbolsForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
