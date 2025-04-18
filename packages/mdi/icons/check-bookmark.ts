import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckBookmarkIcon],svg[mdi-check-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 1h14a2 2 0 0 1 2 2v13c0 .71-.37 1.335-.93 1.69L12 23l-8.071-5.31A1.999 1.999 0 0 1 3 16V3a2 2 0 0 1 2-2zm5 15l9-9l-1.414-1.414L10 13.172L6.414 9.586L5 11l5 5z" fill="currentColor"></svg:path>`,
})
export class MdiCheckBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
