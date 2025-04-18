import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTimerIcon],svg[proicons-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 2.75h6M12 9.5v4"></svg:path><svg:circle cx="12" cy="13.5" r="7.75"></svg:circle><svg:path stroke-linecap="round" d="m19.75 5.818l-2.236 2.236"></svg:path></svg:g>`,
})
export class ProiconsTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
