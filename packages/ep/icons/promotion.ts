import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epPromotionIcon],svg[ep-promotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m64 448l832-320l-128 704l-446.08-243.328L832 192L242.816 545.472zm256 512V657.024L512 768z"></svg:path>`,
})
export class EpPromotionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
