import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInProgressWarningIcon],svg[carbon-in-progress-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.38 28h-6.762L24 21.236ZM24 18a1 1 0 0 0-.895.553l-5 10A1 1 0 0 0 19 30h10a1 1 0 0 0 .921-1.39l-5.026-10.057A1 1 0 0 0 24 18"></svg:path><svg:path fill="currentColor" d="M18.746 22.8A9.999 9.999 0 1 1 14 4v10l6.097 6.097l1.22-2.44A2.99 2.99 0 0 1 24 16h1.82A11.993 11.993 0 1 0 14 26a12 12 0 0 0 3.394-.497Z"></svg:path>`,
})
export class CarbonInProgressWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
