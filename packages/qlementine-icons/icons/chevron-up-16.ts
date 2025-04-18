import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronUp16Icon],svg[qlementine-icons-chevron-up-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.65 5.65a.5.5 0 0 1 .707 0l5 5a.5.5 0 0 1-.707.707L8 6.707l-4.65 4.65a.5.5 0 0 1-.707-.707l5-5z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronUp16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
