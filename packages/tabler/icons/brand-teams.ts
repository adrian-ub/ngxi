import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandTeamsIcon],svg[tabler-brand-teams-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 7h10v10H3zm3 3h4m-2 0v4"></svg:path><svg:path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5-5V9h-5m5 9a4 4 0 0 0 4-4V9h-4"></svg:path><svg:path d="M13.003 8.83a3 3 0 1 0-1.833-1.833"></svg:path><svg:path d="M15.83 8.36a2.5 2.5 0 1 0 .594-4.117"></svg:path></svg:g>`,
})
export class TablerBrandTeamsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
