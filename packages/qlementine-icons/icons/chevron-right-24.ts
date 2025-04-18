import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronRight24Icon],svg[qlementine-icons-chevron-right-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.16 19.9a.5.5 0 0 1-.024-.707l6.68-7.16l-6.68-7.16a.5.5 0 0 1 .731-.683l7 7.5a.5.5 0 0 1 0 .682l-7 7.5a.5.5 0 0 1-.707.025z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronRight24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
