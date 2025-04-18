import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconChevronLeftIcon],svg[octicon-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M5.5 3L7 4.5L3.25 8L7 11.5L5.5 13l-5-5l5-5z" fill="currentColor"></svg:path>`,
})
export class OcticonChevronLeftIcon {
  readonly viewBox = input("0 0 8 16")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
