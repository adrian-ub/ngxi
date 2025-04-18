import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalSymbolIcon],svg[healthicons-hospital-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.964 3.98C12.918 3.99 3.97 12.951 3.98 23.997s8.97 19.992 20.017 19.983c11.045-.009 19.992-8.97 19.983-20.016S35.01 3.971 23.964 3.98M19.99 33.048v-7h8v7h4v-18h-4v7h-8v-7h-4v18z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsHospitalSymbolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
