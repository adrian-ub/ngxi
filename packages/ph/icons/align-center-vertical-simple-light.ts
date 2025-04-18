import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignCenterVerticalSimpleLightIcon],svg[ph-align-center-vertical-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 122h-34V48a14 14 0 0 0-14-14H96a14 14 0 0 0-14 14v74H48a6 6 0 0 0 0 12h34v74a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-74h34a6 6 0 0 0 0-12m-46 86a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhAlignCenterVerticalSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
