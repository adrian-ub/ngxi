import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCarIcon],svg[pixelarticons-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H7v2H5v2H3v12h4v-2h10v2h4V8h-2V6h-2zm0 2v2h2v2H5V8h2V6zm2 10H5v-4h14zm-2-3h-2v2h2zM7 13h2v2H7z"></svg:path>`,
})
export class PixelarticonsCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
