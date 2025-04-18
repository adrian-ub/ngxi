import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDashboardOffIcon],svg[tabler-dashboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.175 11.178a2 2 0 1 0 2.653 2.634M14.5 10.5l1-1"></svg:path><svg:path d="M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488A9 9 0 0 1 17.6 20H6.4a9 9 0 0 1-.268-13.87M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerDashboardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
