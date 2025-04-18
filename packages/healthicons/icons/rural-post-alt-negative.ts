import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPostAltNegativeIcon],svg[healthicons-rural-post-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsRuralPostAltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6.172 21.102A4.86 4.86 0 0 0 8 26.081V42h4V29h8v13h20V26.077a4.86 4.86 0 0 0 1.824-4.976l-1.114-4.875a1.52 1.52 0 0 0-1.479-1.179H31v-5a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v5H8.764c-.707 0-1.321.49-1.479 1.18zm10.954-4.054h-1.177v4.52a3.481 3.481 0 0 0 6.962 0v-1.52H21a4 4 0 0 1-3.874-3m7.958 3v1.52a3.481 3.481 0 0 0 6.962 0v-4.52h-1.172a4 4 0 0 1-3.874 3zm.916 11h9v6h-9zm-2-2h13v10H24zm-14.85-12l-1.028 4.5a2.863 2.863 0 1 0 5.654.637v-5.137zm29.696 0H34.22v5.137a2.863 2.863 0 1 0 5.655-.637zM24 8.548a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2H25v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2H23v-2.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsRuralPostAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsRuralPostAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
