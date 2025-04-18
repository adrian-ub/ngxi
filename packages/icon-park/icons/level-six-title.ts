import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelSixTitleIcon],svg[icon-park-level-six-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 24H23"></svg:path><svg:path d="M36.5 40C39.5376 40 42 37.5376 42 34.5C42 31.4624 39.5376 29 36.5 29C33.4624 29 31 31.4624 31 34.5C31 37.5376 33.4624 40 36.5 40Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41.5962 24.7392C40.7778 22.5461 38.8044 21 36.5 21C33.4624 21 31 23.6863 31 27V34"></svg:path></svg:g>`,
})
export class IconParkLevelSixTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
