import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChevronDownIcon],svg[octicon-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25L8.5 4.5L10 6l-5 5z" fill="currentColor"></svg:path>`,
})
export class OcticonChevronDownIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
