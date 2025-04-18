import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelFiveTitleIcon],svg[icon-park-level-five-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M40 21.0093H32V28.0341C32 28 34 27 37 27C40 27 41 29.5339 41 33.5C41 37.4661 40 40 36 40C33 40 32 38 32 36.0078"></svg:path></svg:g>`,
})
export class IconParkLevelFiveTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
