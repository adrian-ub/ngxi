import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsOpenIcon],svg[pixelarticons-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h6v2H5v14h14v-6h2v8H3V3zm8 0h8v8h-2V7h-2V5h-4zm0 8h-2v2H9v2h2v-2h2zm4-4h-2v2h-2v2h2V9h2z"></svg:path>`,
})
export class PixelarticonsOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
