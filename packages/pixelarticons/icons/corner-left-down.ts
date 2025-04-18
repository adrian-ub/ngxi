import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCornerLeftDownIcon],svg[pixelarticons-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v10H6v2h2v2h2v-2h2v-2h-2V6h10V4H8zm4 10h2v-2h-2zm-6 0H4v-2h2z"></svg:path>`,
})
export class PixelarticonsCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
