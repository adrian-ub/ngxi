import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIDocumentsDeniedNegativeIcon],svg[healthicons-i-documents-denied-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsIDocumentsDeniedNegative0)"><svg:path d="m29 8l6 6h-5a1 1 0 0 1-1-1zm-6.293 12.293a1 1 0 0 0-1.414 1.414L24.586 25l-3.293 3.293a1 1 0 0 0 1.414 1.414L26 26.414l3.293 3.293a1 1 0 0 0 1.414-1.414L27.414 25l3.293-3.293a1 1 0 0 0-1.414-1.414L26 23.586z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm29 5H16a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14zm-17 6h-2v27a5 5 0 0 0 5 5h19v-2H15a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsIDocumentsDeniedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsIDocumentsDeniedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
