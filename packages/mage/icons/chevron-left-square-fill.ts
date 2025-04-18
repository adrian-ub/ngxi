import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageChevronLeftSquareFillIcon],svg[mage-chevron-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-.75 13.7a1 1 0 1 1-1.42 1.41L9.5 13.5a2 2 0 0 1-.47-.69a2.1 2.1 0 0 1 0-1.61a2 2 0 0 1 .46-.68l3.68-3.68a1 1 0 1 1 1.41 1.41l-3.68 3.68v.12z"></svg:path>`,
})
export class MageChevronLeftSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
