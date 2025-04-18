import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowDown16Icon],svg[qlementine-icons-arrow-down-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2.5a.5.5 0 0 0-1 0v9.79L2.85 8.14a.5.5 0 0 0-.707.707l5 5a.5.5 0 0 0 .707 0l5-5a.5.5 0 0 0-.707-.707l-4.15 4.15V2.5z"></svg:path>`,
})
export class QlementineIconsArrowDown16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
