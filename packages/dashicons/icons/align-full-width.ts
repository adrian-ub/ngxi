import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAlignFullWidthIcon],svg[dashicons-align-full-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13V3H3v10zM5 17h10v-2H5z"></svg:path>`,
})
export class DashiconsAlignFullWidthIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
