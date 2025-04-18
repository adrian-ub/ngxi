import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookCrossIcon],svg[mdi-book-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.81 2H7v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v16c0 1.05-.95 2-2 2H6c-1.05 0-2-.95-2-2V4c0-1 .83-1.91 1.81-2M13 10v3h-3v2h3v5h2v-5h3v-2h-3v-3z"></svg:path>`,
})
export class MdiBookCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
