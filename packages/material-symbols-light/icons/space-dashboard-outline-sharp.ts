import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpaceDashboardOutlineSharpIcon],svg[material-symbols-light-space-dashboard-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h6.5V5H5zm7.5 0H19v-7h-6.5zm0-8H19V5h-6.5z"></svg:path>`,
})
export class MaterialSymbolsLightSpaceDashboardOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
