import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeSuitNegativeIcon],svg[healthicons-ppe-suit-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeSuitNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM22 4a4 4 0 0 0-4 4v6.417h-1a4 4 0 0 0-4 4V31a3 3 0 0 0 5 2.236V40.5a2.5 2.5 0 0 0 5 0V29h2v11.5a2.5 2.5 0 0 0 5 0v-7.264A3 3 0 0 0 35 31V18.417a4 4 0 0 0-4-4h-1V8a4 4 0 0 0-4-4zm.9 19.792h-5.5v2.083h13.2v-2.083h-5.5v-9.375h-2.2zM20 7h8v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm-5 23v1a1 1 0 1 0 2 0v-1zm16 1v-1h2v1a1 1 0 1 1-2 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeSuitNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeSuitNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
