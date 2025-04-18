import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowDownRight16Icon],svg[qlementine-icons-arrow-down-right-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 13a.5.5 0 0 1 0-1h5.79L3.14 3.85a.5.5 0 0 1 .707-.707l8.15 8.15v-5.79a.5.5 0 0 1 1 0v7a.5.5 0 0 1-.5.5h-7z"></svg:path>`,
})
export class QlementineIconsArrowDownRight16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
