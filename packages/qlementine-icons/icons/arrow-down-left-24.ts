import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowDownLeft24Icon],svg[qlementine-icons-arrow-down-left-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.9 5.85a.5.5 0 0 0-.707-.707l-12.1 12.1v-8.79a.5.5 0 0 0-1 0v10a.5.5 0 0 0 .5.499h10a.5.5 0 0 0 0-1h-8.79l12.1-12.1z"></svg:path>`,
})
export class QlementineIconsArrowDownLeft24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
