import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMicrophoneIcon],svg[carbon-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 14v3a7 7 0 0 1-14 0v-3H7v3a9 9 0 0 0 8 8.94V28h-4v2h10v-2h-4v-2.06A9 9 0 0 0 25 17v-3Z"></svg:path><svg:path fill="currentColor" d="M16 22a5 5 0 0 0 5-5V7a5 5 0 0 0-10 0v10a5 5 0 0 0 5 5M13 7a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0Z"></svg:path>`,
})
export class CarbonMicrophoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
