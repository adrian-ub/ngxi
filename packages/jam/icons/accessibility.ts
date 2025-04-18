import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamAccessibilityIcon],svg[jam-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.9 10.016l-.324 3.087a1 1 0 1 1-1.989-.21L4.31 6.01H1a1 1 0 0 1 0-2.003h10a1 1 0 0 1 0 2.003H7.69l.723 6.885a1.001 1.001 0 1 1-1.99.209L6.1 10.016zm.1-6.01c-1.105 0-2-.897-2-2.003S4.895 0 6 0s2 .897 2 2.003a2 2 0 0 1-2 2.003"></svg:path>`,
})
export class JamAccessibilityIcon {
  readonly viewBox = input("0 0 12 14")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
