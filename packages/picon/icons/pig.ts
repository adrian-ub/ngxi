import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPigIcon],svg[picon-pig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5v1h1m2 1Q6 5 6 8H5Q3 6 1 8H0V5q0-3 4-3l2-2Q5 3 8 3"></svg:path>`,
})
export class PiconPigIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
