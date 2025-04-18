import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelHighlightSolidIcon],svg[pixel-highlight-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1v7h-8V1H9v10h1v2h1v2h1v5H1v3h19v-8h1v-2h1v-2h1V1zm-2 19h-4v-3h4zm1-7h-1v2h-4v-2h-1v-2h6z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelHighlightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
