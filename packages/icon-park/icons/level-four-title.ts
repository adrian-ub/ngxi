import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelFourTitleIcon],svg[icon-park-level-four-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M39.9767 40V20L31 32.9967V35.0199H43"></svg:path></svg:g>`,
})
export class IconParkLevelFourTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
