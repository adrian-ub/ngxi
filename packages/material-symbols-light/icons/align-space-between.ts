import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignSpaceBetweenIcon],svg[material-symbols-light-align-space-between-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6V4H3V3h18v1h-4.5v2zM3 21v-1h4.5v-2h9v2H21v1z"></svg:path>`,
})
export class MaterialSymbolsLightAlignSpaceBetweenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
