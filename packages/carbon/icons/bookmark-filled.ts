import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBookmarkFilledIcon],svg[carbon-bookmark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonBookmarkFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
