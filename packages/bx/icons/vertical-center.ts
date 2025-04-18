import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxVerticalCenterIcon],svg[bx-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5V2h-2v3H8l4 4l4-4zm0 17v-3h3l-4-4l-4 4h3v3zM3 11h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z"></svg:path>`,
})
export class BxVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
