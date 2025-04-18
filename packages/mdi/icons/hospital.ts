import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHospitalIcon],svg[mdi-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h-4v4h-4v-4H6v-4h4V6h4v4h4"></svg:path>`,
})
export class MdiHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
