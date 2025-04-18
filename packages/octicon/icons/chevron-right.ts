import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChevronRightIcon],svg[octicon-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7.5 8l-5 5L1 11.5L4.75 8L1 4.5L2.5 3l5 5z" fill="currentColor"></svg:path>`,
})
export class OcticonChevronRightIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
