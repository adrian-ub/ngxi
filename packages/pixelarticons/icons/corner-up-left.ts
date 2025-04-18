import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerUpLeftIcon],svg[pixelarticons-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8H8V6H6v2H4v2h2v2h2v-2h10v10h2V8zM8 12v2h2v-2zm0-6V4h2v2z"></svg:path>`,
})
export class PixelarticonsCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
