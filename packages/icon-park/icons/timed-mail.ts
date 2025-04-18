import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTimedMailIcon],svg[icon-park-timed-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M44 35V9H24H4V23V37H26"></svg:path><svg:circle cx="35" cy="35" r="9" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34 32V36H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 9L24 22L44 9"></svg:path></svg:g>`,
})
export class IconParkTimedMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
