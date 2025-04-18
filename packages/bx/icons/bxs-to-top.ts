import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsToTopIcon],svg[bx-bxs-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 15h4v6h6v-6h4l-7-8zM4 3h16v2H4z" fill="currentColor"></svg:path>`,
})
export class BxBxsToTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
