import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTrendTwoIcon],svg[icon-park-twotone-trend-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTrendTwo0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44h40"></svg:path><svg:path fill="#555" d="m4 26l8 2v10H4zm16-2l8-4v18h-8zm16-8l8-4v26h-8z"></svg:path><svg:path stroke-linecap="round" d="m4 18l8 2L44 4H34"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTrendTwo0)"></svg:path>`,
})
export class IconParkTwotoneTrendTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
