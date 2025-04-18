import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSortIcon],svg[la-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3.594l-.719.687l-8 8L5.594 14h20.812l-1.687-1.719l-8-8zm0 2.844L21.563 12H10.438zM5.594 18l1.687 1.719l8 8l.719.687l.719-.687l8-8L26.406 18zm4.843 2h11.126L16 25.563z"></svg:path>`,
})
export class LaSortIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
