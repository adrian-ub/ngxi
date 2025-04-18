import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMinusCircleFIcon],svg[jam-minus-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10M5 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamMinusCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
