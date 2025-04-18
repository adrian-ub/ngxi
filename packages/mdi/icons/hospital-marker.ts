import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHospitalMarkerIcon],svg[mdi-hospital-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7M9 6v6h2v-2h2v2h2V6h-2v2h-2V6z"></svg:path>`,
})
export class MdiHospitalMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
