import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siFilterListLineIcon],svg[si-filter-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 12h12M4 8h16M8 16h8"></svg:path>`,
})
export class SiFilterListLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
