import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH3Icon],svg[ci-heading-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h6l-4 4h1a3 3 0 1 1-2.83 3.999M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
