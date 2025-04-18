import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowDownRight24Icon],svg[qlementine-icons-arrow-down-right-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.15 5.85a.5.5 0 0 1 .707-.707l12.1 12.1v-8.79a.5.5 0 0 1 1 0v10a.5.5 0 0 1-.499.499h-10a.5.5 0 0 1 0-1h8.79l-12.1-12.1z"></svg:path>`,
})
export class QlementineIconsArrowDownRight24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
