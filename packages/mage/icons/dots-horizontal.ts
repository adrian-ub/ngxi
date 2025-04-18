import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalIcon],svg[mage-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.08 12A.96.96 0 1 0 20 12a.96.96 0 0 0-1.92 0m-7.04 0a.96.96 0 1 0 1.92 0a.96.96 0 0 0-1.92 0M4 12a.96.96 0 1 0 1.92 0A.96.96 0 0 0 4 12"></svg:path>`,
})
export class MageDotsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
