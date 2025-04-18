import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlannerBannerAdPtOutlineSharpIcon],svg[material-symbols-light-planner-banner-ad-pt-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h14v18zm1-1h12V4H6zm1.73-2.5h8.693l-2.757-3.654l-2.454 3.077l-1.589-1.884zM6 20V4z"></svg:path>`,
})
export class MaterialSymbolsLightPlannerBannerAdPtOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
