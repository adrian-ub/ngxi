import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRubleIcon],svg[bx-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21h2v-3h6v-2h-6v-2h4.5c2.757 0 5-2.243 5-5s-2.243-5-5-5H9a1 1 0 0 0-1 1v7H5v2h3v2H5v2h3zm2-15h4.5c1.654 0 3 1.346 3 3s-1.346 3-3 3H10z"></svg:path>`,
})
export class BxRubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
