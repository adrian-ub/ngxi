import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHorizontalLeftIcon],svg[bx-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 8l-4 4l4 4v-3h8v-2h-8zM3 18h2v3H3zm0-5h2v3H3zm0-5h2v3H3zm0-5h2v3H3z"></svg:path>`,
})
export class BxHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
