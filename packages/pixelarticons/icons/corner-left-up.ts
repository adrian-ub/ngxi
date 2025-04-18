import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerLeftUpIcon],svg[pixelarticons-corner-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18V8H6V6h2V4h2v2h2v2h-2v10h10v2H8zm4-10h2v2h-2zM6 8H4v2h2z"></svg:path>`,
})
export class PixelarticonsCornerLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
