import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronRight12Icon],svg[qlementine-icons-chevron-right-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.15 9.85a.5.5 0 0 1 0-.707l3.15-3.15l-3.15-3.15a.5.5 0 0 1 .707-.707l3.5 3.5a.5.5 0 0 1 0 .707l-3.5 3.5a.5.5 0 0 1-.707 0z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronRight12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
