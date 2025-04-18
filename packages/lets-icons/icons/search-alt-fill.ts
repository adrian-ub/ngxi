import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSearchAltFillIcon],svg[lets-icons-search-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M11 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 0 0-5 5a1 1 0 1 0 2 0a3 3 0 0 1 3-3a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m20 20l-2-2"></svg:path></svg:g>`,
})
export class LetsIconsSearchAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
