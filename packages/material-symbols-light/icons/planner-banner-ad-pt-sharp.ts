import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlannerBannerAdPtSharpIcon],svg[material-symbols-light-planner-banner-ad-pt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h14v18zm2.73-3.5h8.693l-2.757-3.654l-2.454 3.077l-1.589-1.884z"></svg:path>`,
})
export class MaterialSymbolsLightPlannerBannerAdPtSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
