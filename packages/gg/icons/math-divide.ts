import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMathDivideIcon],svg[gg-math-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m9 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class GgMathDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
