import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEMobiledataBadgeSharpIcon],svg[material-symbols-e-mobiledata-badge-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17h8v-2h-6v-2h5v-2h-5V9h6V7H8zm-5 4V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsEMobiledataBadgeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
