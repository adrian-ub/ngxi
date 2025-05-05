import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNinjaIcon],svg[picon-ninja-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5C-1-.5 9-.5 5 5M1 8q3-6 6 0M2 2.5q2 1.5 4 0M3 8L0 3h1l3 5"></svg:path>`,
})
export class PiconNinjaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
