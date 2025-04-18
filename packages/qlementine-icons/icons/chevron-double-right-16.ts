import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronDoubleRight16Icon],svg[qlementine-icons-chevron-double-right-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.17 12.9a.5.5 0 0 1-.041-.706l3.7-4.17l-3.7-4.17a.5.5 0 0 1 .747-.664l4 4.5a.5.5 0 0 1 0 .664l-4 4.5a.5.5 0 0 1-.706.041z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.17 12.9a.5.5 0 0 1-.041-.706l3.7-4.17l-3.7-4.17a.5.5 0 0 1 .747-.664l4 4.5a.5.5 0 0 1 0 .664l-4 4.5a.5.5 0 0 1-.706.041z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronDoubleRight16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
