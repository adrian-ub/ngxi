import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRssIcon],svg[icon-park-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44L8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V44L24 35.7273L8 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.9497 13.9497L23.9497 25.9497"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17.9497 19.9497L29.9497 19.9497"></svg:path></svg:g>`,
})
export class IconParkRssIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
