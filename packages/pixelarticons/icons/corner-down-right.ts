import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerDownRightIcon],svg[pixelarticons-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h10v2h2v-2h2v-2h-2v-2h-2v2H6V4H4v12zm10-4v-2h-2v2zm0 6v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
