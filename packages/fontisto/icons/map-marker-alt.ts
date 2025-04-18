import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMapMarkerAltIcon],svg[fontisto-map-marker-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.075 23.52C1.264 13.642 0 12.629 0 9c0-4.971 4.029-9 9-9s9 4.029 9 9c0 3.629-1.264 4.64-8.075 14.516a1.126 1.126 0 0 1-1.847.004l-.002-.004zM9 12.75a3.75 3.75 0 1 0 0-7.5a3.75 3.75 0 0 0 0 7.5"></svg:path>`,
})
export class FontistoMapMarkerAltIcon {
  readonly viewBox = input("0 0 18 24")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
