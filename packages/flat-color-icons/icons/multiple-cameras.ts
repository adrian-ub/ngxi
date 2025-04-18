import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMultipleCamerasIcon],svg[flat-color-icons-multiple-cameras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455A64" d="M42 41H12c-2.2 0-4-1.8-4-4V17c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#78909C" d="M36 36H6c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h30c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="26" cy="22" r="10" fill="#455A64"></svg:circle><svg:circle cx="26" cy="22" r="7" fill="#42A5F5"></svg:circle><svg:path fill="#90CAF9" d="M29.7 19.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8.6-3.7 1.7c-.4.4-.3 1 .1 1.4s1 .3 1.4-.1c1.2-1.3 3.3-1.3 4.5 0c.2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3"></svg:path><svg:path fill="#ADD8FB" d="M6 12h6v3H6z"></svg:path>`,
})
export class FlatColorIconsMultipleCamerasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
