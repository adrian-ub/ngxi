import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSecurityIcon],svg[icon-park-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 26V22C42 12.0589 33.9411 4 24 4V4C14.0589 4 6 12.0589 6 22V26"></svg:path><svg:path d="M32 27V12C32 7.58172 28.4183 4 24 4V4C19.5817 4 16 7.58172 16 12V27"></svg:path><svg:path d="M24 24V38C24 41.3137 26.6863 44 30 44V44C33.3137 44 36 41.3137 36 38V35.1111"></svg:path><svg:path d="M12 24H42"></svg:path></svg:g>`,
})
export class IconParkSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
