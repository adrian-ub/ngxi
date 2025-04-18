import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRateReviewSharpIcon],svg[material-symbols-light-rate-review-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.385 13.616h2.21l5.89-5.897l-2.173-2.21l-5.927 5.897zM12.3 8.689l-.95-.945l.965-.955l.916.95zm-.484 4.927h5.8v-1h-4.8zM3 20.077V3h18v14H6.077z"></svg:path>`,
})
export class MaterialSymbolsLightRateReviewSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
