import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsClearFiltersIcon],svg[flat-color-icons-clear-filters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F57C00" d="M29 23H19L7 9h34z"></svg:path><svg:path fill="#FF9800" d="m29 38l-10 6V23h10zM41.5 9h-35C5.7 9 5 8.3 5 7.5S5.7 6 6.5 6h35c.8 0 1.5.7 1.5 1.5S42.3 9 41.5 9"></svg:path><svg:circle cx="38" cy="38" r="10" fill="#F44336"></svg:circle><svg:path fill="#fff" d="M32 36h12v4H32z"></svg:path>`,
})
export class FlatColorIconsClearFiltersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
