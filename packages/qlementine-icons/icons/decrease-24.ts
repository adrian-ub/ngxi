import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsDecrease24Icon],svg[qlementine-icons-decrease-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.7 22.7a.99.99 0 0 0 .187-1.15l-4-8a1 1 0 0 0-1.601-.26l-1.65 1.65l-12.8-12.8a.5.5 0 0 0-.707.707l12.8 12.8l-1.65 1.65a1 1 0 0 0 .26 1.601l8 4a.99.99 0 0 0 1.15-.187z"></svg:path>`,
})
export class QlementineIconsDecrease24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
