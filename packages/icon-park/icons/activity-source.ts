import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkActivitySourceIcon],svg[icon-park-activity-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 5H6V13H42V5Z"></svg:path><svg:path d="M42 20H6V28H42V20Z"></svg:path><svg:path d="M42 35H6V43H42V35Z"></svg:path></svg:g>`,
})
export class IconParkActivitySourceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
