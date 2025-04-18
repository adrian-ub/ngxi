import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsChevronLeft24Icon],svg[qlementine-icons-chevron-left-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.8 19.9a.5.5 0 0 0 .024-.707l-6.68-7.16l6.68-7.16a.5.5 0 0 0-.731-.683l-7 7.5a.5.5 0 0 0 0 .682l7 7.5a.5.5 0 0 0 .707.025z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsChevronLeft24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
