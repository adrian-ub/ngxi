import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIDocumentsAcceptedNegativeIcon],svg[healthicons-i-documents-accepted-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsIDocumentsAcceptedNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm29 5H16a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14zm0 3l6 6h-5a1 1 0 0 1-1-1zm3.707 14.707a1 1 0 0 0-1.414-1.414L24 28.586l-3.293-3.293a1 1 0 0 0-1.414 1.414L24 31.414zM12 11h-2v27a5 5 0 0 0 5 5h19v-2H15a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsIDocumentsAcceptedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsIDocumentsAcceptedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
