import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignTopThinIcon],svg[ph-align-top-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 40a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-16 40v96a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4Zm-80 0v136a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhAlignTopThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
