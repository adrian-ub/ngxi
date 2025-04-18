import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAmbulatoryClinicOutline24pxIcon],svg[healthicons-ambulatory-clinic-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.989 4c-.74-.624-1.696-1-2.739-1s-2 .376-2.739 1H2l1 4v10a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2V8l1-4zm1.445 4a4.251 4.251 0 0 1-8.368 0H5v10h7v-6h5v6h2V8zM10 5v1.5h1.5V8H10v1.5H8.5V8H7V6.5h1.5V5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAmbulatoryClinicOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
