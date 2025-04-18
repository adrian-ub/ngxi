import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsStopwatchIcon],svg[bxs-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8s8-3.589 8-8s-3.589-8-8-8m1 8h-2V8h2zM9 2h6v2H9zm9.707 2.293l2 2l-1.414 1.414l-2-2z"></svg:path>`,
})
export class BxsStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
