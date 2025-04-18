import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChevronUpSquareFillIcon],svg[mage-chevron-up-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.87 12.5a1 1 0 0 1-1.41 0l-3.68-3.68h-.12L8.3 14.5a1 1 0 1 1-1.43-1.4l3.63-3.6a2 2 0 0 1 .69-.47a2.14 2.14 0 0 1 1.61 0a2 2 0 0 1 .68.46l3.68 3.68a1 1 0 0 1-.04 1.33"></svg:path>`,
})
export class MageChevronUpSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
