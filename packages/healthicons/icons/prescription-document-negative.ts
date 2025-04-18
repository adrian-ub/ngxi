import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPrescriptionDocumentNegativeIcon],svg[healthicons-prescription-document-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPrescriptionDocumentNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM27 4v11a1 1 0 0 0 1 1h11v27a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2 .586V14h9.414zM18 18a1 1 0 0 0-1 1v14h2v-7h1.586l5 5l-3.293 3.293l1.414 1.414L27 32.414l3.293 3.293l1.414-1.414L28.414 31l3.293-3.293l-1.414-1.414L27 29.586l-3.605-3.605A4 4 0 0 0 23 18zm1 6h4a2 2 0 1 0 0-4h-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPrescriptionDocumentNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPrescriptionDocumentNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
