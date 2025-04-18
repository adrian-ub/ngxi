import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMilitaryRankIcon],svg[tabler-military-rank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 7v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7l6-4z"></svg:path><svg:path d="m10 13l2-1l2 1m-4 4l2-1l2 1m-4-8l2-1l2 1"></svg:path></svg:g>`,
})
export class TablerMilitaryRankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
