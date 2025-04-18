import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLogIcon],svg[icon-park-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="34" x="13" y="10" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 22H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 30H33"></svg:path></svg:g>`,
})
export class IconParkLogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
