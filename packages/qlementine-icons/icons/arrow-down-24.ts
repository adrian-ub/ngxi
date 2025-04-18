import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowDown24Icon],svg[qlementine-icons-arrow-down-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a.5.5 0 0 0-1 0v15.8l-6.15-6.15a.5.5 0 0 0-.707.707l7 7a.5.5 0 0 0 .707 0l7-7a.5.5 0 0 0-.707-.707l-6.15 6.15V3.5z"></svg:path>`,
})
export class QlementineIconsArrowDown24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
