import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerDownLeftIcon],svg[pixelarticons-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16H8v2H6v-2H4v-2h2v-2h2v2h10V4h2v12zM8 12v-2h2v2zm0 6v2h2v-2z"></svg:path>`,
})
export class PixelarticonsCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
