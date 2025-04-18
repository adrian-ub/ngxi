import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFlashAutoIcon],svg[flat-color-icons-flash-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFC107" d="M33 22h-9.4L30 5H19l-6 21h8.6L17 45z"></svg:path><svg:path fill="#F44336" d="M40.8 14.5h-4.3l-.9 2.5H33l4.5-12h2.3l4.5 12h-2.6zm-3.7-2h3L38.6 8z"></svg:path>`,
})
export class FlatColorIconsFlashAutoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
