import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeGlovesNegativeIcon],svg[healthicons-ppe-gloves-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeGlovesNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.5 5A1.5 1.5 0 0 0 24 6.5V19h-1V8.5a1.5 1.5 0 0 0-3 0V19h-1v-8.5a1.5 1.5 0 0 0-3 0V27a6 6 0 0 0 2.905 5.141L18 43h12l-.91-10.91a9.1 9.1 0 0 0 3.617-3.15l4.25-6.375a1.881 1.881 0 0 0-3.034-2.218L31 24V8.5a1.5 1.5 0 0 0-3 0V19h-1V6.5A1.5 1.5 0 0 0 25.5 5M14 12h-2v16c0 2.286 1.18 4.647 2.943 5.989L14.205 41h2.011l.845-8.028l-.544-.328C15.092 31.784 14 29.85 14 28z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeGlovesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeGlovesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
