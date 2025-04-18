import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStarFilledIcon],svg[ix-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 362.812l-139.517 85.216l37.933-159.021L30.257 182.652l162.96-13.065L256 18.64l62.782 150.947l162.961 13.065l-124.159 106.355l37.933 159.021z"></svg:path>`,
})
export class IxStarFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
