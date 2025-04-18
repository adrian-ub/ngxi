import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siFilterListAltLineIcon],svg[si-filter-list-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 10h12M8 14h8m-6 4h4M4 6h16"></svg:path>`,
})
export class SiFilterListAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
