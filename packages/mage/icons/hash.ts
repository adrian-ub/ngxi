import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHashIcon],svg[mage-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.886 21L9.443 3m5.114 18l2.557-18M3 8.855h18M3 15.247h18"></svg:path>`,
})
export class MageHashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
