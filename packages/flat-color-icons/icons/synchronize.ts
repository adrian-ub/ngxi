import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsSynchronizeIcon],svg[flat-color-icons-synchronize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF6F00" d="m38.7 11.9l-3.1 2.5c2.2 2.7 3.4 6.1 3.4 9.5c0 8.3-6.7 15-15 15c-.9 0-1.9-.1-2.8-.3l-.7 3.9c1.2.2 2.4.3 3.5.3c10.5 0 19-8.5 19-19c0-4.2-1.5-8.5-4.3-11.9"></svg:path><svg:path fill="#FF6F02" d="m31 8l11.9 1.6l-9.8 9.8z"></svg:path><svg:path fill="#FF6F00" d="M24 5C13.5 5 5 13.5 5 24c0 4.6 1.6 9 4.6 12.4l3-2.6C10.3 31.1 9 27.6 9 24c0-8.3 6.7-15 15-15c.9 0 1.9.1 2.8.3l.7-3.9C26.4 5.1 25.2 5 24 5"></svg:path><svg:path fill="#FF6F02" d="M17 40L5.1 38.4l9.8-9.8z"></svg:path>`,
})
export class FlatColorIconsSynchronizeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
