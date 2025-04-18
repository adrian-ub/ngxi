import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageSearchSquareFillIcon],svg[mage-search-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2 14.94a.78.78 0 0 1-.57.23a.8.8 0 0 1-.56-.23l-2-2a4.81 4.81 0 1 1 1.13-1.13l2 2a.79.79 0 0 1 .01 1.13z"></svg:path><svg:path fill="currentColor" d="M14.5 11a3.21 3.21 0 1 1-6.418 0a3.21 3.21 0 0 1 6.418 0"></svg:path>`,
})
export class MageSearchSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
