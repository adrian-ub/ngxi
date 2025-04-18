import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTeamDashboardSharpIcon],svg[material-symbols-team-dashboard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-8.25H3V21zm2 0h9v-8.25h-9zM3 10.75h18V3H3z"></svg:path>`,
})
export class MaterialSymbolsTeamDashboardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
