import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPeriodIcon],svg[ls-period-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 577h77v77H0z"></svg:path>`,
})
export class LsPeriodIcon {
  readonly viewBox = input("0 0 77 654")
  readonly width = input("0.12em")
  readonly height = input("1em")
}
