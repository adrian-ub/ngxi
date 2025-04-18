import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSortNumberAscIcon],svg[ri-sort-number-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v8H7V5.41l-2 .539v-2.33L7.313 3zm10 0v13h3l-4 5l-4-5h3V3zm-8 12.5a3 3 0 0 1-.427 1.544L8.289 21h-2.31l1.473-2.55A3.001 3.001 0 1 1 11 15.5m-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiSortNumberAscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
