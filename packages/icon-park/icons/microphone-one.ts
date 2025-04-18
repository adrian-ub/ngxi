import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMicrophoneOneIcon],svg[icon-park-microphone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M15 26.3137C15 26.3137 19.5962 25.9602 22.7782 22.7782C25.9601 19.5962 26.3137 15 26.3137 15L34.0657 27.1817C35.3205 29.1535 35.0374 31.7322 33.3848 33.3848C31.7322 35.0374 29.1535 35.3205 27.1817 34.0657L15 26.3137Z"></svg:path><svg:circle cx="15" cy="15" r="11"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5.65674 25.4561L25.4557 5.65707"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 33L42 41L33 41"></svg:path></svg:g>`,
})
export class IconParkMicrophoneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
