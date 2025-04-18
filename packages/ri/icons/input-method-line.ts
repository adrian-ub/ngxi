import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInputMethodLineIcon],svg[ri-input-method-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m5.869 12l-.82 2H6.833L11 7h2l4.167 10H14.95l-.82-2zm.82-2h2.623L12 9.8z"></svg:path>`,
})
export class RiInputMethodLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
