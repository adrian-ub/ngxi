import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerUpRightIcon],svg[pixelarticons-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h10V6h2v2h2v2h-2v2h-2v-2H6v10H4V8zm10 4v2h-2v-2zm0-6V4h-2v2z"></svg:path>`,
})
export class PixelarticonsCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
