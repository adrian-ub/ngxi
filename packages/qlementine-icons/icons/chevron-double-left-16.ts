import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronDoubleLeft16Icon],svg[qlementine-icons-chevron-double-left-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.83 3.13a.5.5 0 0 1 .042.706l-3.7 4.17l3.7 4.17a.5.5 0 0 1-.748.665l-4-4.5a.5.5 0 0 1 0-.664l4-4.5a.5.5 0 0 1 .706-.042z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.8 3.13a.5.5 0 0 1 .042.706l-3.7 4.17l3.7 4.17a.5.5 0 1 1-.748.665l-4-4.5a.5.5 0 0 1 0-.664l4-4.5a.5.5 0 0 1 .706-.042z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronDoubleLeft16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
