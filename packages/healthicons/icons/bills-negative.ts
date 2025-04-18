import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBillsNegativeIcon],svg[healthicons-bills-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBillsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM10.49 36v-4h2v1.038A3 3 0 0 1 15.484 36h24.022a3 3 0 0 1 2.982-3V22.996A3 3 0 0 1 40 21.67V18h2.49a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-30a2 2 0 0 1-2-2M25 20a4 4 0 1 1-8 0a4 4 0 0 1 8 0M4 12a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm29.001 0H8.998A3 3 0 0 1 6 15v10.038A3 3 0 0 1 8.996 28h24.022A3 3 0 0 1 36 25V14.996A3 3 0 0 1 33.001 12" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBillsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBillsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
