import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHomeNegativeIcon],svg[healthicons-home-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsHomeNegative0)"><svg:path d="M34 25v11h-6V25zm-9 0H14v6h11z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM5 36a1 1 0 1 0 0 2h36a1 1 0 1 0 0-2h-3V22l-14-8l-14 8v14zm31-19.101V11h-5v2.957l-6.493-3.819a1 1 0 0 0-1.014 0L5.631 20.645l1.014 1.724L24 12.16l17.355 10.21l1.014-1.724z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHomeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHomeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
