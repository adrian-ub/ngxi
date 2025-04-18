import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsDecrease16Icon],svg[qlementine-icons-decrease-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.3 14.9a.5.5 0 0 0 .67-.67l-3-6a.5.5 0 0 0-.8-.13l-1.15 1.15L1.87 1.1a.5.5 0 0 0-.707.706l8.15 8.15l-1.15 1.15a.5.5 0 0 0 .13.801l6 3z"></svg:path>`,
})
export class QlementineIconsDecrease16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
