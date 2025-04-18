import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsSerialTasksIcon],svg[flat-color-icons-serial-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M33 9H11v4h22c1.1 0 2 .9 2 2v20H23v4h16V15c0-3.3-2.7-6-6-6"></svg:path><svg:path fill="#D81B60" d="M6 6h10v10H6z"></svg:path><svg:g fill="#2196F3"><svg:path d="M32 17h10v10H32zM16 32h10v10H16z"></svg:path><svg:circle cx="26" cy="11" r="5"></svg:circle><svg:circle cx="37" cy="37" r="5"></svg:circle></svg:g>`,
})
export class FlatColorIconsSerialTasksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
