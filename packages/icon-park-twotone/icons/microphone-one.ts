import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMicrophoneOneIcon],svg[icon-park-twotone-microphone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMicrophoneOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M15 26.314s4.596-.354 7.778-3.536S26.314 15 26.314 15l7.752 12.182a4.986 4.986 0 0 1-6.884 6.884z"></svg:path><svg:circle cx="15" cy="15" r="11"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5.657 25.456L25.456 5.657M34 33l8 8h-9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMicrophoneOne0)"></svg:path>`,
})
export class IconParkTwotoneMicrophoneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
