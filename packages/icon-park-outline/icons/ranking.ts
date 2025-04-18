import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRankingIcon],svg[icon-park-outline-ranking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M17 18H4v24h13z"></svg:path><svg:path d="M30 6H17v36h13z"></svg:path><svg:path stroke-linecap="round" d="M43 26H30v16h13z"></svg:path></svg:g>`,
})
export class IconParkOutlineRankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
