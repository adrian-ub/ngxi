import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignBottomThinIcon],svg[ph-align-bottom-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-80-40V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v96a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4Zm-96 0V40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v136a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Z"></svg:path>`,
})
export class PhAlignBottomThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
