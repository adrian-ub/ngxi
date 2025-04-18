import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCircleHalfIcon],svg[bx-circle-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-1v20h1a10 10 0 0 0 0-20m1 17.94V4.06a8 8 0 0 1 0 15.88"></svg:path>`,
})
export class BxCircleHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
