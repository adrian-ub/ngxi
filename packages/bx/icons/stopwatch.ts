import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxStopwatchIcon],svg[bx-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8s8-3.589 8-8s-3.589-8-8-8m0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6"></svg:path><svg:path fill="currentColor" d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707l-2-2l1.414-1.414l2 2z"></svg:path>`,
})
export class BxStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
