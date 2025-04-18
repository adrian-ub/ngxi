import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRewardedAdsSharpIcon],svg[material-symbols-light-rewarded-ads-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11m-3.615 9v-1H11.5v-3.754q-1.283-.102-2.36-1.047q-1.079-.945-1.317-2.21q-1.586-.187-2.705-1.301T4 8V6h3.654V4h8.692v2H20v2q0 1.573-1.118 2.688t-2.705 1.3q-.238 1.266-1.316 2.211T12.5 15.246V19h3.116v1zm-.731-9.084V7H5v1q0 1.142.762 1.963t1.892.953m8.692 0q1.131-.133 1.893-.954T19 8V7h-2.654z"></svg:path>`,
})
export class MaterialSymbolsLightRewardedAdsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
