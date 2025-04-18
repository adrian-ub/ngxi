import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelNineTitleIcon],svg[icon-park-level-nine-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 24H23"></svg:path><svg:path d="M36.5 21C33.4624 21 31 23.4624 31 26.5C31 29.5376 33.4624 32 36.5 32C39.5376 32 42 29.5376 42 26.5C42 23.4624 39.5376 21 36.5 21Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 36C31.8184 38.1932 33.5476 40 36.5 40C39.5376 40 42 37.3137 42 34V27"></svg:path></svg:g>`,
})
export class IconParkLevelNineTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
