import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDashboardCustomizeIcon],svg[material-symbols-light-dashboard-customize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3.5h7v7h-7zm10 0h7v7h-7zm-10 10h7v7h-7zm13 0h1v3h3v1h-3v3h-1v-3h-3v-1h3z"></svg:path>`,
})
export class MaterialSymbolsLightDashboardCustomizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
