import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowLeft24Icon],svg[qlementine-icons-arrow-left-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 11a.5.5 0 0 1 0 1H4.7l6.15 6.15a.5.5 0 0 1-.707.707l-7-7a.5.5 0 0 1 0-.707l7-7a.5.5 0 0 1 .707.707l-6.15 6.15h15.8z"></svg:path>`,
})
export class QlementineIconsArrowLeft24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
