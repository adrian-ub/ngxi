import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListMiddleIcon],svg[icon-park-list-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M8 28C10.2091 28 12 26.2091 12 24C12 21.7909 10.2091 20 8 20C5.79086 20 4 21.7909 4 24C4 26.2091 5.79086 28 8 28Z"></svg:path><svg:path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z"></svg:path><svg:path d="M8 40C9.10457 40 10 39.1046 10 38C10 36.8954 9.10457 36 8 36C6.89543 36 6 36.8954 6 38C6 39.1046 6.89543 40 8 40Z"></svg:path><svg:path stroke-linecap="round" d="M20 24H44"></svg:path><svg:path stroke-linecap="round" d="M20 38H44"></svg:path><svg:path stroke-linecap="round" d="M20 10H44"></svg:path></svg:g>`,
})
export class IconParkListMiddleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
