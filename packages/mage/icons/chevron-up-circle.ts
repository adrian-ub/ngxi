import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChevronUpCircleIcon],svg[mage-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.533 13.667l-3.777-3.778a1.135 1.135 0 0 0-1.606 0l-3.683 3.778"></svg:path><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageChevronUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
