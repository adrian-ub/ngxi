import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsIncrease16Icon],svg[qlementine-icons-increase-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.9 1.72a.5.5 0 0 0-.67-.67l-6 3a.5.5 0 0 0-.13.8L9.25 6L1.1 14.15a.5.5 0 0 0 .706.707l8.15-8.15l1.15 1.15a.5.5 0 0 0 .801-.13l3-6z"></svg:path>`,
})
export class QlementineIconsIncrease16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
