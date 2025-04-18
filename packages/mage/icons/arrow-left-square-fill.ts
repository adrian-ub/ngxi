import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowLeftSquareFillIcon],svg[mage-arrow-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.35 11H8.83l3.41 3.43a1.002 1.002 0 0 1-.326 1.636a1 1 0 0 1-.384.074a1 1 0 0 1-.71-.29L6.4 13.44a2.1 2.1 0 0 1-.44-.66a2 2 0 0 1 0-1.56a2.1 2.1 0 0 1 .44-.66l4.42-4.41a1 1 0 1 1 1.41 1.42L8.79 11h8.8a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageArrowLeftSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
