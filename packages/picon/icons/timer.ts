import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTimerIcon],svg[picon-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5c0-5 8-5 8 0c0 4-8 4-8 0m2-5h4v1H2m5 0h1v1H7M0 1h1v1H0m4 3h3L5 4L4 1"></svg:path>`,
})
export class PiconTimerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
