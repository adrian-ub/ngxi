import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCrownIcon],svg[akar-icons-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 8l1.304 1.043a4 4 0 0 0 5.995-1.181L12 3l2.701 4.862a4 4 0 0 0 5.996 1.18L22 8l-1.754 8.77a2.56 2.56 0 0 1-1.367 1.79v0a15.38 15.38 0 0 1-13.758 0v0a2.56 2.56 0 0 1-1.367-1.79z"></svg:path><svg:path d="M8 15c2.596 1.333 5.404 1.333 8 0"></svg:path></svg:g>`,
})
export class AkarIconsCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
