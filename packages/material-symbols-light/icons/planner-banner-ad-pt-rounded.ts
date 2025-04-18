import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlannerBannerAdPtRoundedIcon],svg[material-symbols-light-planner-banner-ad-pt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h10.769q.69 0 1.153.463T19 4.616v14.769q0 .69-.462 1.153T17.384 21zm4.596-4.077l-1.266-1.5q-.13-.142-.313-.142t-.314.161l-1.078 1.412q-.162.211-.053.429t.356.217h7.066q.248 0 .356-.217q.109-.218-.033-.43l-1.944-2.597q-.131-.162-.323-.162q-.193 0-.324.162z"></svg:path>`,
})
export class MaterialSymbolsLightPlannerBannerAdPtRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
