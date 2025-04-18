import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRateReviewOutlineSharpIcon],svg[material-symbols-light-rate-review-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.385 13.616h2.204l5.89-5.891l-2.167-2.221l-5.928 5.908zm6.846-5.902l-.925-.945zM7.269 12.73v-.95l3.448-3.448l.462.488l.469.481l-3.429 3.429zm3.91-3.91l.469.481l-.93-.97zm.63 4.795h5.807v-1H12.81zM3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z"></svg:path>`,
})
export class MaterialSymbolsLightRateReviewOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
