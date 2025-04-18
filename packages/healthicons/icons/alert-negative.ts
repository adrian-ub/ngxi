import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlertNegativeIcon],svg[healthicons-alert-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsAlertNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm21 7a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0zm3 31a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAlertNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAlertNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
