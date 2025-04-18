import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookMinusIcon],svg[majesticons-book-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 19h-6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7.803A6 6 0 0 1 21 13.341V5a3 3 0 0 0-3-3zm2 10V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7l-2.293-2.293a1 1 0 0 0-1.414 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsBookMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
