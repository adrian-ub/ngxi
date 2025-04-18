import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTrendingDownIcon],svg[bx-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 9.586l-4 4l-6.293-6.293l-1.414 1.414L10 16.414l4-4l4.293 4.293L16 19h6v-6l-2.293 2.293z"></svg:path>`,
})
export class BxTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
