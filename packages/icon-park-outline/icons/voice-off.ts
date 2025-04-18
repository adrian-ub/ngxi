import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineVoiceOffIcon],svg[icon-park-outline-voice-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 24V11a7 7 0 1 0-14 0v13a7 7 0 1 0 14 0Z"></svg:path><svg:path stroke-linecap="round" d="M9 23c0 8.284 6.716 15 15 15c1.753 0 3.436-.3 5-.853M39 23a14.95 14.95 0 0 1-1.248 6M24 38v6m18-2L6 6"></svg:path></svg:g>`,
})
export class IconParkOutlineVoiceOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
