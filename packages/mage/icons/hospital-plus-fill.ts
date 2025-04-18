import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHospitalPlusFillIcon],svg[mage-hospital-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.95v4.11a1.78 1.78 0 0 1-1.78 1.78h-4.39v4.39a1.73 1.73 0 0 1-.52 1.25a1.8 1.8 0 0 1-1.26.52H9.94a1.8 1.8 0 0 1-1.26-.52a1.8 1.8 0 0 1-.52-1.25v-4.39H3.78A1.78 1.78 0 0 1 2 14.06V9.95a1.78 1.78 0 0 1 1.78-1.78h4.38V3.78a1.8 1.8 0 0 1 1.103-1.646A1.8 1.8 0 0 1 9.94 2H14a1.8 1.8 0 0 1 1.26.52a1.77 1.77 0 0 1 .52 1.26v4.39h4.39c.472.003.924.19 1.26.52A1.78 1.78 0 0 1 22 9.95"></svg:path>`,
})
export class MageHospitalPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
