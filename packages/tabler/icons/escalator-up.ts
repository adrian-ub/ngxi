import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEscalatorUpIcon],svg[tabler-escalator-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 7h-2.672a2 2 0 0 0-1.414.586L7 16H4.5a2.5 2.5 0 1 0 0 5h3.672a2 2 0 0 0 1.414-.586L18 12h1.5a2.5 2.5 0 1 0 0-5M6 10V3M3 6l3-3l3 3"></svg:path>`,
})
export class TablerEscalatorUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
