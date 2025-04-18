import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPaperRoll2LineIcon],svg[majesticons-paper-roll-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9a5 5 0 1 0 5-5m-5 5a5 5 0 0 1 5-5m-5 5v11l-1.5-1l-2 1l-2-1L4 20V9c0-4 3.333-5 5-5h7"></svg:path><svg:circle cx="16" cy="9" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class MajesticonsPaperRoll2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
