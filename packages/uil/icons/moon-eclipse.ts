import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMoonEclipseIcon],svg[uil-moon-eclipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 0-2.14.24h-.12a10 10 0 0 0-.1 19.44h.14A9.6 9.6 0 0 0 12 22a10 10 0 0 0 0-20m-2 17.74a8 8 0 0 1 0-15.48a8 8 0 0 1 0 15.48m4.53-.16a10 10 0 0 0 0-15.16a8 8 0 0 1 0 15.16"></svg:path>`,
})
export class UilMoonEclipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
