import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronUp12Icon],svg[qlementine-icons-chevron-up-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.15 7.85a.5.5 0 0 0 .707 0l3.15-3.15l3.15 3.15a.5.5 0 0 0 .707-.707l-3.5-3.5a.5.5 0 0 0-.707 0l-3.5 3.5a.5.5 0 0 0 0 .707z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronUp12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
