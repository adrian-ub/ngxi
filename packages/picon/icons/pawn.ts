import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPawnIcon],svg[picon-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2q0-4 1 0M4 2q0-4 1 0M0 5q0-4 1 0m2 3c-5-5 8-9 3 0M2 2q0-4 1 0"></svg:path>`,
})
export class PiconPawnIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
