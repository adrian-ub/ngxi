import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHeadingH6Icon],svg[ci-heading-h6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.402 14.525A2.974 2.974 0 0 0 16.5 18.6a3.01 3.01 0 0 0 4.099-1.092a2.973 2.973 0 0 0-1.099-4.075a3.01 3.01 0 0 0-4.098 1.092m0 0L19 8M3 5v7m0 0v7m0-7h8m0-7v7m0 0v7"></svg:path>`,
})
export class CiHeadingH6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
