import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsONegativeIcon],svg[healthicons-o-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsONegative0)"><svg:path d="M14 24c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 10c-7.732 0-14 6.268-14 14s6.268 14 14 14s14-6.268 14-14s-6.268-14-14-14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsONegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsONegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
