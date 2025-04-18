import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMedicineMortarNegativeIcon],svg[healthicons-medicine-mortar-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsMedicineMortarNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM33.994 8.235a3 3 0 0 1 4.02-.97l.168.097a3 3 0 0 1 1.17 3.967L35.932 18h-8.247zM41 22h2v-2H5v2h2v3c0 5.784 3.778 10.686 9 12.373V41a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3.627c5.222-1.687 9-6.589 9-12.373zM20 38h10v2H18v-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMedicineMortarNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMedicineMortarNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
