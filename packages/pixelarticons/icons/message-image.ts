import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMessageImageIcon],svg[pixelarticons-message-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2zm10 4h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2V8h2v2h2v2h2v-2h-2V8h-2zM6 6h2v2H6z"></svg:path>`,
})
export class PixelarticonsMessageImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
