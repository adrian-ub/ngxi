import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowRight24Icon],svg[qlementine-icons-arrow-right-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 11a.5.5 0 0 0 0 1h15.8l-6.15 6.15a.5.5 0 0 0 .707.707l7-7a.5.5 0 0 0 0-.707l-7-7a.5.5 0 0 0-.707.707l6.15 6.15H3.5z"></svg:path>`,
})
export class QlementineIconsArrowRight24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
