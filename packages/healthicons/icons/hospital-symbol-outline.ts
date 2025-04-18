import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalSymbolOutlineIcon],svg[healthicons-hospital-symbol-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6s18 8.059 18 18s-8.059 18-18 18M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24m15.991 9.048v-7h8v7h4v-18h-4v7h-8v-7h-4v18z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsHospitalSymbolOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
