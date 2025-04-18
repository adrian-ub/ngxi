import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsPlaneTakeOffIcon],svg[bxs-plane-take-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18h18v2H3zm18.509-9.473a1.61 1.61 0 0 0-2.036-1.019L15 9L7 6L5 7l6 4l-4 2l-4-2l-1 1l4 4l14.547-5.455a1.61 1.61 0 0 0 .962-2.018"></svg:path>`,
})
export class BxsPlaneTakeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
