import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionCurveIcon],svg[carbon-direction-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 4l-7 7l1.414 1.414L16 7.828v6.769a3 3 0 0 1-.657 1.874l-2.247 2.808A5.02 5.02 0 0 0 12 22.403V28h2v-5.597a3 3 0 0 1 .657-1.874l2.247-2.808A5.02 5.02 0 0 0 18 14.597V7.828l4.586 4.586L24 11Z"></svg:path>`,
})
export class CarbonDirectionCurveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
