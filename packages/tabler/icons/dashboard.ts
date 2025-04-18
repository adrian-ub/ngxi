import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDashboardIcon],svg[tabler-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.45-1.45L15.5 9.5"></svg:path><svg:path d="M6.4 20a9 9 0 1 1 11.2 0z"></svg:path></svg:g>`,
})
export class TablerDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
