import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiEyeIcon],svg[oi-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.03 1C1.5 1 0 4 0 4s1.5 3 4.03 3C6.5 7 8 4 8 4S6.5 1 4.03 1M4 2a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4m0 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1c0-.1-.04-.19-.06-.28a.495.495 0 1 1-.66-.66A.9.9 0 0 0 4 3"></svg:path>`,
})
export class OiEyeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
