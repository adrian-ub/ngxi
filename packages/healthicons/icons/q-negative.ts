import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsQNegativeIcon],svg[healthicons-q-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsQNegative0)"><svg:path d="m29.414 26.586l2.93 2.929A9.95 9.95 0 0 0 34 24c0-5.523-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10c2.038 0 3.934-.61 5.515-1.657l-2.93-2.929a2 2 0 1 1 2.83-2.828"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14c3.145 0 6.047-1.037 8.384-2.787l2.202 2.201a2 2 0 1 0 2.828-2.828l-2.201-2.202A13.94 13.94 0 0 0 38 24c0-7.732-6.268-14-14-14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
