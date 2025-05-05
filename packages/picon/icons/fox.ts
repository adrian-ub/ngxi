import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFoxIcon],svg[picon-fox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5Q5 6 4 8Q3 6 0 5l1-2l-1-3l3 2h2l3-2l-1 3M2 3l1 1V3m2 0v1l1-1M1 5q2 1 3 2q1-1 3-2M4 6l1-1l-1-1l-1 1"></svg:path>`,
})
export class PiconFoxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
