import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronDown16Icon],svg[qlementine-icons-chevron-down-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.65 5.65a.5.5 0 0 1 .707 0l4.65 4.65l4.65-4.65a.5.5 0 0 1 .707.707l-5 5a.5.5 0 0 1-.707 0l-5-5a.5.5 0 0 1 0-.707z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronDown16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
