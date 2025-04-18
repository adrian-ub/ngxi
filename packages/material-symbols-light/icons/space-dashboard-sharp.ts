import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpaceDashboardSharpIcon],svg[material-symbols-light-space-dashboard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h7.5v16zm8.5-9V4H20v7zm7.5 9h-7.5v-8H20z"></svg:path>`,
})
export class MaterialSymbolsLightSpaceDashboardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
