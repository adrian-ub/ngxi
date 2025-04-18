import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilChartBarAltIcon],svg[uil-chart-bar-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20H4v-2h3a1 1 0 0 0 0-2H4v-2h11a1 1 0 0 0 0-2H4v-2h7a1 1 0 0 0 0-2H4V6h15a1 1 0 0 0 0-2H4V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilChartBarAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
