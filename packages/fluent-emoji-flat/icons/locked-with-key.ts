import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLockedWithKeyIcon],svg[fluent-emoji-flat-locked-with-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F9C23C" d="M3 13a3 3 0 0 1 3-3h2l1.5-1l1 1h7L19 9l1 1h2a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#433B6B" d="M15.5 19.5a2.5 2.5 0 1 0-3 0V23a1.5 1.5 0 0 0 3 0z"></svg:path><svg:path fill="#D3D3D3" d="M14 1a6 6 0 0 0-6 6v3h2.5V7a3.5 3.5 0 1 1 7 0v3H20V7a6 6 0 0 0-6-6m16 8.5a4.5 4.5 0 0 1-3 4.244V22.5a1.5 1.5 0 0 1-3 0v-1.754c0-.2.078-.39.216-.52l.313-.31a.723.723 0 0 0 0-1.04a.71.71 0 0 1 0-1.03a.723.723 0 0 0 0-1.04l-.313-.31a.73.73 0 0 1-.216-.52v-2.232A4.502 4.502 0 0 1 25.5 5A4.5 4.5 0 0 1 30 9.5M25.5 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLockedWithKeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
