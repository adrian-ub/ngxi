import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphChartColumnDecreaseIcon],svg[si-glyph-chart-column-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M0 16h15.938v.969H0zm14.906-7.058l-4.756-.875l1.609-1.609l-4.78-4.057L2.9 5.733a.5.5 0 1 1-.658-.753l4.745-3.914l5.479 4.685l1.684-1.684z"></svg:path><svg:path d="M6 6h2.951v8.878H6zM1 9h2.982v5.878H1zm10 2h2.951v3.892H11z"></svg:path></svg:g>`,
})
export class SiGlyphChartColumnDecreaseIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
