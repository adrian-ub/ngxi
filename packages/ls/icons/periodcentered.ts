import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPeriodcenteredIcon],svg[ls-periodcentered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 311h77v77H0z"></svg:path>`,
})
export class LsPeriodcenteredIcon {
  readonly viewBox = input("0 0 77 614")
  readonly width = input("0.13em")
  readonly height = input("1em")
}
