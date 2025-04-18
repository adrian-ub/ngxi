import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChevronLeftIcon],svg[mage-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.583 4l-6.587 6.587a2.013 2.013 0 0 0 0 2.826L15.583 20"></svg:path>`,
})
export class MageChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
