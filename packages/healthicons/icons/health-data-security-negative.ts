import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthDataSecurityNegativeIcon],svg[healthicons-health-data-security-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHealthDataSecurityNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM20 4a3 3 0 0 0-3 3h-3a3 3 0 0 0-3 3v28a3 3 0 0 0 3 3h12v-2H14a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3h3a1 1 0 0 1 1 1v15h2V10a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1zm4 12v-3h2v3h3v2h-3v3h-2v-3h-3v-2zm4 9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6.789a7 7 0 0 1-3.117 5.824l-3.328 2.22a1 1 0 0 1-1.11 0l-3.328-2.22A7 7 0 0 1 27 34.79zm6.707 8.707l4-4l-1.414-1.414L33 34.586l-1.293-1.293l-1.414 1.414l2 2a1 1 0 0 0 1.414 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHealthDataSecurityNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHealthDataSecurityNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
