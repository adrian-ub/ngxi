import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSortAltLineIcon],svg[si-sort-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 10h12M4 6h16M4 14h8m-8 4h4"></svg:path>`,
})
export class SiSortAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
