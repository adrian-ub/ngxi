import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconArrowBothIcon],svg[octicon-arrow-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 8l6-5v3h8V3l6 5l-6 5v-3H6v3L0 8z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowBothIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
