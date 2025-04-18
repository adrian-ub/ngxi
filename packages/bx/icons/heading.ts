import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHeadingIcon],svg[bx-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20V4h-3v6H9V4H6v16h3v-7h6v7z"></svg:path>`,
})
export class BxHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
