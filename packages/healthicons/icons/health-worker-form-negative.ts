import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthWorkerFormNegativeIcon],svg[healthicons-health-worker-form-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsHealthWorkerFormNegative0)"><svg:path d="M20 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-4 14a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1-4a1 1 0 0 1 1-1h15.5a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M15 28a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm2 3v-2h2v2z" clip-rule="evenodd"></svg:path><svg:path d="M28 32a3 3 0 1 0 0-6a3 3 0 1 0 0 6m-6 4.5c0-2.116 3.997-3.182 6-3.182s6 1.066 6 3.182V39H22z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3h4a3 3 0 0 1 3 3v31a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHealthWorkerFormNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHealthWorkerFormNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
