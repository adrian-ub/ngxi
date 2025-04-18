import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCircleQuarterIcon],svg[bx-circle-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-1v11h11v-1A10 10 0 0 0 12 2m1 9V4.06A8 8 0 0 1 19.94 11z"></svg:path>`,
})
export class BxCircleQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
