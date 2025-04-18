import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGobletIcon],svg[icon-park-goblet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 44H23H13"></svg:path><svg:path d="M23 28V44"></svg:path><svg:path fill="#2F88FF" d="M35 16C35 22.5 29.6274 28 23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H31C31 4 35 9.5 35 16Z"></svg:path></svg:g>`,
})
export class IconParkGobletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
