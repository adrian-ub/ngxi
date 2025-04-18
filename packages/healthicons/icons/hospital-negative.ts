import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalNegativeIcon],svg[healthicons-hospital-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHospitalNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM9 42a1 1 0 1 0 0 2h30a1 1 0 1 0 0-2h-3V8h2V6h-7a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2h-7v2h2v34zm25-31v31h-3v-4h1v-2H16v2h1v4h-3V11h3v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5zM23 42h2v-4h-2zM34 8v1h-3V8zM14 9h3V8h-3zm11-2h-2v3h-3v2h3v3h2v-3h3v-2h-3zm-9 13h4v3h-4zm4 5h-4v3h4zm-4 5h4v3h-4zm10-10h-4v3h4zm-4 5h4v3h-4zm4 5h-4v3h4zm2-10h4v3h-4zm4 5h-4v3h4zm-4 5h4v3h-4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHospitalNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHospitalNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
