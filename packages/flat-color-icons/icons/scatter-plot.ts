import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsScatterPlotIcon],svg[flat-color-icons-scatter-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CFD8DC" d="M9 39V6H7v35h35v-2z"></svg:path><svg:g fill="#00BCD4"><svg:circle cx="39" cy="11" r="3"></svg:circle><svg:circle cx="31" cy="13" r="3"></svg:circle><svg:circle cx="37" cy="19" r="3"></svg:circle><svg:circle cx="34" cy="26" r="3"></svg:circle><svg:circle cx="28" cy="20" r="3"></svg:circle><svg:circle cx="26" cy="28" r="3"></svg:circle><svg:circle cx="20" cy="23" r="3"></svg:circle><svg:circle cx="21" cy="33" r="3"></svg:circle><svg:circle cx="14" cy="30" r="3"></svg:circle></svg:g>`,
})
export class FlatColorIconsScatterPlotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
