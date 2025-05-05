import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPizzaIcon],svg[picon-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v1h1V5M0 8L4.5.5q2.5.5 3 3M4 1q3 0 3 3l1-.5Q8 0 4.5 0M4 3v1h1V3"></svg:path>`,
})
export class PiconPizzaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
