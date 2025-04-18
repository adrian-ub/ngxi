import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInputMethodFillIcon],svg[ri-input-method-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5.869 12h4.262l.82 2h2.216L13 7h-2L6.833 17H9.05zm.82-2L12 9.8l1.312 3.2z"></svg:path>`,
})
export class RiInputMethodFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
