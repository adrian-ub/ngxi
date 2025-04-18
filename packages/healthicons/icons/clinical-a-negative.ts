import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsClinicalANegativeIcon],svg[healthicons-clinical-a-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsClinicalANegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v2.273a1.5 1.5 0 0 1 1 1.415V39a5 5 0 0 1-10 0V12.688a1.5 1.5 0 0 1 1-1.415V9h-1a1 1 0 0 1-1-1zm4 4v2.688a1.5 1.5 0 0 1-1 1.414V18h6v-4.898a1.5 1.5 0 0 1-1-1.415V9z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsClinicalANegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsClinicalANegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
