import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCloverIcon],svg[picon-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3q1-5 2.5-1.5Q10 3 5 4q5 0 1.5 2.5Q5 10 4 5q-1 5-2.5 1.5Q-2 5 3 4q-5-1-1.5-2.5Q3-2 4 3"></svg:path>`,
})
export class PiconCloverIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
