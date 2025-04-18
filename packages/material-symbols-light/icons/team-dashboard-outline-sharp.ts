import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTeamDashboardOutlineSharpIcon],svg[material-symbols-light-team-dashboard-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm6.5-1v-6.5H5V19zm1 0H19v-6.5h-7.5zM5 11.5h14V5H5z"></svg:path>`,
})
export class MaterialSymbolsLightTeamDashboardOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
