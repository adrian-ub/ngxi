import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneStandIcon],svg[marketeq-microphone-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 43.75h-8.334M25 27.083V43.75z"></svg:path><svg:path stroke="#306CFE" d="M31.833 22.188L13.792 32.875A2.083 2.083 0 0 1 11 32.25l-2.48-3.646A2.083 2.083 0 0 1 9 25.792l16.667-12.75zm8.563-12.271a8.333 8.333 0 0 0-11.563-2.25a8.33 8.33 0 0 0-3.416 4.979l6.833 10.146a8.33 8.33 0 0 0 5.896-1.292a8.333 8.333 0 0 0 2.25-11.583"></svg:path><svg:path stroke="#344054" d="m24.104 10.708l9.313 13.813"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneStandIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
