import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronUp24Icon],svg[qlementine-icons-chevron-up-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.13 14.8a.5.5 0 0 0 .707.024l7.16-6.68l7.16 6.68a.5.5 0 0 0 .683-.731l-7.5-7a.5.5 0 0 0-.682 0l-7.5 7a.5.5 0 0 0-.025.707z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronUp24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
