import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronDoubleUp16Icon],svg[qlementine-icons-chevron-double-up-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.9 7.83a.5.5 0 0 1-.706.042l-4.17-3.7l-4.17 3.7a.5.5 0 0 1-.664-.748l4.5-4a.5.5 0 0 1 .664 0l4.5 4a.5.5 0 0 1 .041.706z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.9 11.8a.5.5 0 0 1-.706.042l-4.17-3.7l-4.17 3.7a.5.5 0 1 1-.664-.748l4.5-4a.5.5 0 0 1 .664 0l4.5 4a.5.5 0 0 1 .041.706z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronDoubleUp16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
