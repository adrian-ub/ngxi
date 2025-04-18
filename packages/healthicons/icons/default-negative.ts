import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDefaultNegativeIcon],svg[healthicons-default-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsDefaultNegative0)"><svg:path d="M13 13a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm-1 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm22.981 2.293a1 1 0 0 0-1.414 0l-.791.79l1.414 1.415l.791-.79a1 1 0 0 0 0-1.415m-2.912 1.497L28 36.86v1.414h1.414l5.07-5.069z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm8 9v26a3 3 0 0 0 3 3h11.832A10 10 0 0 1 22 34c0-5.523 4.477-10 10-10q1.03.002 2 .2V9a3 3 0 0 0-3-3H11a3 3 0 0 0-3 3m32 25a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDefaultNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDefaultNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
