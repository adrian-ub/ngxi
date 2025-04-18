import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsHeatMapIcon],svg[flat-color-icons-heat-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CFD8DC" d="M9 39V6H7v35h35v-2z"></svg:path><svg:g fill="#00BCD4"><svg:circle cx="14" cy="11" r="2"></svg:circle><svg:circle cx="32" cy="11" r="2"></svg:circle><svg:circle cx="39" cy="11" r="2"></svg:circle><svg:circle cx="23" cy="11" r="4"></svg:circle><svg:circle cx="14" cy="33" r="2"></svg:circle><svg:circle cx="30" cy="33" r="2"></svg:circle><svg:circle cx="22" cy="33" r="3"></svg:circle><svg:circle cx="38" cy="33" r="4"></svg:circle><svg:circle cx="14" cy="22" r="2"></svg:circle><svg:circle cx="39" cy="22" r="2"></svg:circle><svg:circle cx="32" cy="22" r="3"></svg:circle></svg:g>`,
})
export class FlatColorIconsHeatMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
