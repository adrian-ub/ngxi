import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmChevronLeftIcon],svg[charm-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 3.75L5.75 8l4.5 4.25"></svg:path>`,
})
export class CharmChevronLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
