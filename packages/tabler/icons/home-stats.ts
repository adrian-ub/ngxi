import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeStatsIcon],svg[tabler-home-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 13v-1h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h2.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-2 7l3-3l2 2l4-4"></svg:path><svg:path d="M19 17h3v3"></svg:path></svg:g>`,
})
export class TablerHomeStatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
