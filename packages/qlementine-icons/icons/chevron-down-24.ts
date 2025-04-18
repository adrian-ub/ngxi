import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronDown24Icon],svg[qlementine-icons-chevron-down-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.13 9.16a.5.5 0 0 1 .707-.024l7.16 6.68l7.16-6.68a.5.5 0 0 1 .683.731l-7.5 7a.5.5 0 0 1-.682 0l-7.5-7a.5.5 0 0 1-.025-.707z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronDown24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
