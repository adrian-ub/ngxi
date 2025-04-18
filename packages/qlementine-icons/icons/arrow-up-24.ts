import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowUp24Icon],svg[qlementine-icons-arrow-up-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.5a.5.5 0 0 1-1 0V4.7l-6.15 6.15a.5.5 0 0 1-.707-.707l7-7a.5.5 0 0 1 .707 0l7 7a.5.5 0 0 1-.707.707l-6.15-6.15v15.8z"></svg:path>`,
})
export class QlementineIconsArrowUp24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
