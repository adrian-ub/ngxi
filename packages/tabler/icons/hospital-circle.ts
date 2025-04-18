import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHospitalCircleIcon],svg[tabler-hospital-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16V8m-7 4a9 9 0 1 0 18 0a9 9 0 0 0-18 0m11 4V8m-4 4h4"></svg:path>`,
})
export class TablerHospitalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
