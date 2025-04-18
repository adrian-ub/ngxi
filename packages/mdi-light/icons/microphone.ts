import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightMicrophoneIcon],svg[mdi-light-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21v-3c-3.36-.27-6-3.08-6-6.5V11h1v.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V11h1v.5c0 3.42-2.64 6.23-6 6.5v3zm.5-18A2.5 2.5 0 0 1 14 5.5v6a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 11.5v-6A2.5 2.5 0 0 1 11.5 3m0 1A1.5 1.5 0 0 0 10 5.5v6a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 11.5 4"></svg:path>`,
})
export class MdiLightMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
