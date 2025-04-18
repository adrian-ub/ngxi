import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMathPercentIcon],svg[gg-math-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.243 6.343a1 1 0 1 1 1.414 1.414l-9.9 9.9a1 1 0 0 1-1.414-1.414zM9.879 9.879A2 2 0 1 1 7.05 7.05a2 2 0 0 1 2.83 2.83m4.241 7.07a2 2 0 1 0 2.829-2.829a2 2 0 0 0-2.829 2.829"></svg:path>`,
})
export class GgMathPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
