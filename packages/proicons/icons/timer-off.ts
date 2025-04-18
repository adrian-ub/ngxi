import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTimerOffIcon],svg[proicons-timer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 2.75h6M12 9.5V12m7.75-6.182l-2.236 2.236M2.75 2.75l18.5 18.5m-3.071-3.071A7.75 7.75 0 0 0 7.32 7.32M5.361 9.5A7.75 7.75 0 0 0 16 20.14"></svg:path>`,
})
export class ProiconsTimerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
