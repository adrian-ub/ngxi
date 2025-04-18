import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmChevronRightIcon],svg[charm-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.75 12.25L10.25 8l-4.5-4.25"></svg:path>`,
})
export class CharmChevronRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
