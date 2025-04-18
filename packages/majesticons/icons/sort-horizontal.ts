import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSortHorizontalIcon],svg[majesticons-sort-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M17.707 4.293A1 1 0 0 0 16 5v2h-6a1 1 0 1 0 0 2h6v2a1 1 0 0 0 1.707.707l3-3a1 1 0 0 0 0-1.414l-3-3zm-11.414 8A1 1 0 0 1 8 13v2h6a1 1 0 1 1 0 2H8v2a1 1 0 0 1-1.707.707l-3-3a1 1 0 0 1 0-1.414l3-3z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsSortHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
