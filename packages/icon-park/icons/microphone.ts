import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMicrophoneIcon],svg[icon-park-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="16" height="28" x="16" y="4" stroke-linecap="round" stroke-linejoin="round" rx="8"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 21V24C10 31.732 16.268 38 24 38V38C31.732 38 38 31.732 38 24V21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 5V11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 16H21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 16H32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 22H21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 22H32"></svg:path><svg:path d="M24 38V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 44H32"></svg:path></svg:g>`,
})
export class IconParkMicrophoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
