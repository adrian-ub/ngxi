import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSecurityIcon],svg[icon-park-outline-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 26v-4c0-9.941-8.059-18-18-18v0C14.059 4 6 12.059 6 22v4"></svg:path><svg:path d="M32 27V12a8 8 0 0 0-8-8v0a8 8 0 0 0-8 8v15"></svg:path><svg:path d="M24 24v14a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-2.889M12 24h30"></svg:path></svg:g>`,
})
export class IconParkOutlineSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
