import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChevronUpIcon],svg[mage-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 15.583l-6.587-6.587a2.013 2.013 0 0 0-2.826 0L4 15.583"></svg:path>`,
})
export class MageChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
