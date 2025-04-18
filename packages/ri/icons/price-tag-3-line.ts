import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPriceTag3LineIcon],svg[ri-price-tag-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.904 2.1l9.9 1.414l1.414 9.9l-9.192 9.192a1 1 0 0 1-1.415 0l-9.9-9.9a1 1 0 0 1 0-1.413zm.707 2.122L3.833 12l8.485 8.485l7.779-7.778l-1.061-7.425zm2.122 6.363a2 2 0 1 1 2.828-2.828a2 2 0 0 1-2.828 2.829"></svg:path>`,
})
export class RiPriceTag3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
