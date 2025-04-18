import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCheckIcon],svg[uim-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.84 17.08a1 1 0 0 1-.707-.293l-3.84-3.84a1 1 0 1 1 1.414-1.414l3.133 3.133l7.453-7.453a1 1 0 0 1 1.414 1.414l-8.16 8.16a1 1 0 0 1-.707.293"></svg:path>`,
})
export class UimCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
