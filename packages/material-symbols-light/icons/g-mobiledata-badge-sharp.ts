import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGMobiledataBadgeSharpIcon],svg[material-symbols-light-g-mobiledata-badge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 16.5h7v-5h-2.615v1H14.5v3h-5v-7h6v-1h-7zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightGMobiledataBadgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
