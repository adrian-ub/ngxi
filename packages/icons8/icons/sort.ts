import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8SortIcon],svg[icons8-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3.594l-.72.687l-8 8L5.595 14h20.811l-1.687-1.72l-8-8l-.72-.686zm0 2.844L21.563 12H10.438zM5.594 18l1.687 1.72l8 8l.72.686l.72-.687l8-8L26.405 18zm4.843 2h11.126L16 25.563z"></svg:path>`,
})
export class Icons8SortIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
