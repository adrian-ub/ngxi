import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsICertificatePaperNegativeIcon],svg[healthicons-i-certificate-paper-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsICertificatePaperNegative0)"><svg:path fill-rule="evenodd" d="M30 40h-4v-3.535a4 4 0 1 1 4 0zm-2-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M18 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1m-3 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm10 7v30a3 3 0 0 0 3 3h13v4l2-1.5l2 1.5v-4h5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsICertificatePaperNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsICertificatePaperNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
