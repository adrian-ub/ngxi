import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddGridIcon],svg[pixelarticons-add-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v8H3zm6 6V5H5v4zm9 4h-2v3h-3v2h3v3h2v-3h3v-2h-3zM15 3h6v8h-8V3zm4 6V5h-4v4zM5 13h6v8H3v-8zm4 6v-4H5v4z"></svg:path>`,
})
export class PixelarticonsAddGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
