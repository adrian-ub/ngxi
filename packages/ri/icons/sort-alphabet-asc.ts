import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSortAlphabetAscIcon],svg[ri-sort-alphabet-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28zm1.23-3h1.803L7 5.8zm12.9 8V3h-2v13h-3l4 5l4-5zm-8-3H3v2h4.855L3 19v2h8v-2H6.146L11 15z"></svg:path>`,
})
export class RiSortAlphabetAscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
