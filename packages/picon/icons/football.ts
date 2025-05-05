import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFootballIcon],svg[picon-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8q2.5-4 .5-3Q1 7 4 3L0 2q12-.5 6 2L4 8M2 7L1 8L0 7l1-1m4-5q2 2 1-1"></svg:path>`,
})
export class PiconFootballIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
