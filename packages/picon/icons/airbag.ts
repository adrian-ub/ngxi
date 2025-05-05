import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAirbagIcon],svg[picon-airbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4C-.5 4-.5 0 2 0s2.5 4 0 4m0 3L1 8L0 7l2-2l2 2m2 1L3 5h1l3 3M5 5V3q1-2 2 0v4M6 2L5 1l1-1l1 1"></svg:path>`,
})
export class PiconAirbagIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
