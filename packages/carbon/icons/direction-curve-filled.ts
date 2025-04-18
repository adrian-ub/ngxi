import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionCurveFilledIcon],svg[carbon-direction-curve-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-5.414 11.414L18 8.828v5.769a5.02 5.02 0 0 1-1.096 3.124l-2.247 2.808A3 3 0 0 0 14 22.403V27h-2v-4.597a5.02 5.02 0 0 1 1.096-3.124l2.247-2.808A3 3 0 0 0 16 14.597V8.828l-4.586 4.586L10 12l7-7l7 7Z"></svg:path><svg:path fill="none" d="M22.586 13.414L18 8.828v5.769a5.02 5.02 0 0 1-1.096 3.124l-2.247 2.808A3 3 0 0 0 14 22.403V27h-2v-4.597a5.02 5.02 0 0 1 1.096-3.124l2.247-2.808A3 3 0 0 0 16 14.597V8.828l-4.586 4.586L10 12l7-7l7 7Z"></svg:path>`,
})
export class CarbonDirectionCurveFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
