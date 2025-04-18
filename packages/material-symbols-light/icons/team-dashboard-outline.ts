import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTeamDashboardOutlineIcon],svg[material-symbols-light-team-dashboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zm4.884-1v-6.5H5v5.885q0 .269.173.442t.443.173zm1 0h6.885q.269 0 .442-.173t.173-.442V12.5h-7.5zM5 11.5h14V5.616q0-.27-.173-.443T18.385 5H5.615q-.269 0-.442.173T5 5.616z"></svg:path>`,
})
export class MaterialSymbolsLightTeamDashboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
