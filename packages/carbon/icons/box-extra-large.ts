import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBoxExtraLargeIcon],svg[carbon-box-extra-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V9h2v17h20V9h2v17a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M19 21V9h-2v14h7v-2zM16 9h-2l-2 6l-2-6H8l2.752 7L8 23h2l2-6l2 6h2l-2.755-7zM4 4h24v2H4z"></svg:path>`,
})
export class CarbonBoxExtraLargeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
