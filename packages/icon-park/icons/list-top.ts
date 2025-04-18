import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListTopIcon],svg[icon-park-list-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M8 14C10.2091 14 12 12.2091 12 10C12 7.79086 10.2091 6 8 6C5.79086 6 4 7.79086 4 10C4 12.2091 5.79086 14 8 14Z"></svg:path><svg:path d="M8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26Z"></svg:path><svg:path d="M8 40C9.10457 40 10 39.1046 10 38C10 36.8954 9.10457 36 8 36C6.89543 36 6 36.8954 6 38C6 39.1046 6.89543 40 8 40Z"></svg:path><svg:path stroke-linecap="round" d="M20 24H44"></svg:path><svg:path stroke-linecap="round" d="M20 38H44"></svg:path><svg:path stroke-linecap="round" d="M20 10H44"></svg:path></svg:g>`,
})
export class IconParkListTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
