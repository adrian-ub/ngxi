import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalSymbolNegativeIcon],svg[healthicons-hospital-symbol-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHospitalSymbolNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM3.97 24.291c0-11.046 8.954-20 20-20s20 8.954 20 20s-8.955 20-20 20s-20-8.954-20-20m16.021 1.757v7h-4v-18h4v7h8v-7h4v18h-4v-7z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHospitalSymbolNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHospitalSymbolNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
