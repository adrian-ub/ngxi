import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwipeLeftAltIcon],svg[material-symbols-swipe-left-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17q-1.825 0-3.187-1.137T10.1 13H5.825L7.4 14.6L6 16l-4-4l4-4l1.425 1.4l-1.6 1.6H10.1q.35-1.725 1.713-2.863T15 7q2.075 0 3.538 1.463T20 12t-1.463 3.538T15 17"></svg:path>`,
})
export class MaterialSymbolsSwipeLeftAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
