import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlannerBannerAdPtSharpIcon],svg[material-symbols-planner-banner-ad-pt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20zm3-4h10l-3.45-4.5l-2.3 3l-1.55-2z"></svg:path>`,
})
export class MaterialSymbolsPlannerBannerAdPtSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
