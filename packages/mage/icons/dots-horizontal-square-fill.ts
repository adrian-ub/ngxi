import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalSquareFillIcon],svg[mage-dots-horizontal-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2M7.19 13.66a1.66 1.66 0 1 1 0-3.319a1.66 1.66 0 0 1 0 3.319m4.81 0A1.659 1.659 0 1 1 13.66 12A1.67 1.67 0 0 1 12 13.66m4.81 0a1.66 1.66 0 1 1 .06-3.32a1.66 1.66 0 0 1-.06 3.32"></svg:path>`,
})
export class MageDotsHorizontalSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
