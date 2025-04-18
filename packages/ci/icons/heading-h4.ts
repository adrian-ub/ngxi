import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH4Icon],svg[ci-heading-h4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 9l-2.5 8H20m0 0h1m-1 0v-3m0 3v2M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
