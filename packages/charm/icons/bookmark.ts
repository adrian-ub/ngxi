import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBookmarkIcon],svg[charm-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 1.75h8.5v12.5L8 9.75l-4.25 4.5z"></svg:path>`,
})
export class CharmBookmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
