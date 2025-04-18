import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicalSearch1NegativeIcon],svg[healthicons-medical-search-1-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMedicalSearch1Negative0)"><svg:path fill-rule="evenodd" d="M21 20a6.97 6.97 0 0 0-5 2.101A6.98 6.98 0 0 0 14 27a6.98 6.98 0 0 0 2 4.899l.003.003l.047.048A6.98 6.98 0 0 0 21 34a7 7 0 0 0 0-14m0 12c.711 0 1.387-.148 2-.416v-9.168A5 5 0 1 0 21 32" clip-rule="evenodd"></svg:path><svg:path d="M18 11.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898a1.5 1.5 0 0 0 1-1.415V9h4z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM11 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2.273a1.5 1.5 0 0 0-1 1.415V39a5.002 5.002 0 0 0 10 0v-3a8.96 8.96 0 0 0 5.618-1.968l2.45 2.45a2 2 0 0 0 .518 1.932l5 5a2 2 0 1 0 2.828-2.828l-5-5a2 2 0 0 0-1.932-.518l-2.45-2.45A9 9 0 0 0 21 18v-5.312a1.5 1.5 0 0 0-1-1.415V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicalSearch1Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicalSearch1NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
