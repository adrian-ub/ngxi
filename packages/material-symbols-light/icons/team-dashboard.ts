import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTeamDashboardIcon],svg[material-symbols-light-team-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.667 0-1.141-.475T4 18.386V12.25h6.5V20zm5.884 0v-7.75H20v6.135q0 .666-.475 1.14t-1.14.475zM4 11.25V5.616q0-.667.475-1.141T5.615 4h12.77q.666 0 1.14.475T20 5.615v5.635z"></svg:path>`,
})
export class MaterialSymbolsLightTeamDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
