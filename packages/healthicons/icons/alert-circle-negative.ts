import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlertCircleNegativeIcon],svg[healthicons-alert-circle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsAlertCircleNegative0)"><svg:path d="M24 11a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0V13a2 2 0 0 1 2-2m2 24a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:path fill-rule="evenodd" d="M0 48h48V0H0zM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAlertCircleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAlertCircleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
