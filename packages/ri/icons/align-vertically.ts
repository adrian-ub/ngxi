import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAlignVerticallyIcon],svg[ri-align-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h18v2H3zm15 7v3h-2v-3h-3l4-4l4 4zM8 18v3H6v-3H3l4-4l4 4zM18 6h3l-4 4l-4-4h3V3h2zM8 6h3l-4 4l-4-4h3V3h2z"></svg:path>`,
})
export class RiAlignVerticallyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
