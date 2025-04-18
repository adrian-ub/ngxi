import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHospitalBoxOutlineIcon],svg[mdi-hospital-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h-4v4h-4v-4H6v-4h4V6h4v4h4m2-8H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h16z"></svg:path>`,
})
export class MdiHospitalBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
