import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalLightIcon],svg[ph-align-center-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 122h-18V72a14 14 0 0 0-14-14h-40a14 14 0 0 0-14 14v50h-20V48a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v74H32a6 6 0 0 0 0 12h18v74a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-74h20v50a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-50h18a6 6 0 0 0 0-12m-118 86a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Zm88-24a2 2 0 0 1-2 2h-40a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhAlignCenterVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
