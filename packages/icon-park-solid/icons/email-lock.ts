import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEmailLockIcon],svg[icon-park-solid-email-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H4v30h20"></svg:path><svg:path d="m4 9l20 15L44 9"></svg:path><svg:path fill="currentColor" d="M31 33h12v8H31z"></svg:path><svg:path d="M40 33v-3a3 3 0 1 0-6 0v3"></svg:path></svg:g>`,
})
export class IconParkSolidEmailLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
