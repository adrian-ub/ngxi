import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDressIcon],svg[picon-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8q3-4 1-6L1 3L0 2q1-2 3-2q1 2 2 0q2 0 3 2L7 3L6 2Q4 4 7 8"></svg:path>`,
})
export class PiconDressIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
