import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaKeypadFillIcon],svg[eva-keypad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 6a3 3 0 1 0-3-3a3 3 0 0 0 3 3M5 9a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3M5 16a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3m7 0a3 3 0 1 0 3 3a3 3 0 0 0-3-3"></svg:path>`,
})
export class EvaKeypadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
