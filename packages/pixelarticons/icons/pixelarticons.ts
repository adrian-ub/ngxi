import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPixelarticonsIcon],svg[pixelarticons-pixelarticons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm16 2v14H5V5zM7 7h6v6H9v2H7zm8 6h-2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0h2v-2h-2zM9 9v2h2V9z"></svg:path>`,
})
export class PixelarticonsPixelarticonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
