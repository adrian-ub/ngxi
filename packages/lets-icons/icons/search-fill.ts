import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSearchFillIcon],svg[lets-icons-search-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M18 11a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m20 20l-2-2"></svg:path></svg:g>`,
})
export class LetsIconsSearchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
