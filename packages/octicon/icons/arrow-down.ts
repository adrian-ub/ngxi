import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconArrowDownIcon],svg[octicon-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M7 7V3H3v4H0l5 6l5-6H7z" fill="currentColor"></svg:path>`,
})
export class OcticonArrowDownIcon {
  readonly viewBox = input("0 0 10 16")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
