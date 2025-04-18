import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTeamDashboardSharpIcon],svg[material-symbols-light-team-dashboard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 20v-7.75H4V20zm1 0H20v-7.75h-8.5zM4 11.25h16V4H4z"></svg:path>`,
})
export class MaterialSymbolsLightTeamDashboardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
