import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRabbitIcon],svg[picon-rabbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8H5q1-3-2-3q2 1 1 3H0q0-5 4-5q0-1-3-1q3-2 4-1c4 0 4 4 0 3m1-1h1V2H6"></svg:path>`,
})
export class PiconRabbitIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
