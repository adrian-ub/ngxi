import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageExclamationSquareFillIcon],svg[mage-exclamation-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-4.29 5.56a1 1 0 0 1 2 0v6.17a1 1 0 1 1-2 0zm1 10.58a1 1 0 1 1 .03 0z"></svg:path>`,
})
export class MageExclamationSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
