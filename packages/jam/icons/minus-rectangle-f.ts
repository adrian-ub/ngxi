import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMinusRectangleFIcon],svg[jam-minus-rectangle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4m1 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamMinusRectangleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
