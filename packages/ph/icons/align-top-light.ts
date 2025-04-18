import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlignTopLightIcon],svg[ph-align-top-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 40a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-16 40v96a14 14 0 0 1-14 14h-40a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2h-40a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2Zm-76 0v136a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14V80a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhAlignTopLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
