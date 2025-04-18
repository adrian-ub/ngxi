import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronDoubleDown16Icon],svg[qlementine-icons-chevron-double-down-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.13 4.17a.5.5 0 0 1 .706-.041l4.17 3.7l4.17-3.7a.5.5 0 0 1 .665.747l-4.5 4a.5.5 0 0 1-.664 0l-4.5-4a.5.5 0 0 1-.042-.706z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.13 8.17a.5.5 0 0 1 .706-.041l4.17 3.7l4.17-3.7a.5.5 0 0 1 .665.747l-4.5 4a.5.5 0 0 1-.664 0l-4.5-4a.5.5 0 0 1-.042-.706z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronDoubleDown16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
