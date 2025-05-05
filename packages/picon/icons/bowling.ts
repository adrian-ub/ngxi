import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBowlingIcon],svg[picon-bowling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6c0-2.5 4-2.5 4 0S4 8.5 4 6M1 8q-2-2 0-5h1q2 3 0 5M1 2.5Q0 1 1 0h1q1 1 0 2.5"></svg:path>`,
})
export class PiconBowlingIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
