import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBookmarkIcon],svg[carbon-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4v22.75l-7.1-3.59l-.9-.45l-.9.45L8 26.75V4zm0-2H8a2 2 0 0 0-2 2v26l10-5l10 5V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonBookmarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
