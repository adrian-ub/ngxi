import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSearchAltLineIcon],svg[si-search-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0"></svg:path>`,
})
export class SiSearchAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
