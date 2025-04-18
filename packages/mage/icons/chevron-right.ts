import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChevronRightIcon],svg[mage-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.417 20l6.587-6.587a2.013 2.013 0 0 0 0-2.826L8.417 4"></svg:path>`,
})
export class MageChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
