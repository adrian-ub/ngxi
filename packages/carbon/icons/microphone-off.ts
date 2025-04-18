import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMicrophoneOffIcon],svg[carbon-microphone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.18 18.57A7.4 7.4 0 0 1 9 17v-3H7v3a8.8 8.8 0 0 0 .58 3.18zM13 15V7a3 3 0 0 1 6 0v1.75l2-2A5 5 0 0 0 11 7v8zm10 2a7 7 0 0 1-11.73 5.14l1.42-1.41A5 5 0 0 0 21 17v-4.58l9-9L28.59 2L2 28.59L3.41 30l6.44-6.44A8.9 8.9 0 0 0 15 25.94V28h-4v2h10v-2h-4v-2.06A9 9 0 0 0 25 17v-3h-2zm-4 0a3 3 0 0 1-4.9 2.31l4.9-4.89z"></svg:path>`,
})
export class CarbonMicrophoneOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
