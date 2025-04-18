import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSlidersIcon],svg[pixelarticons-sliders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4h2v10h-2zm0 12h-2v2h2v2h2v-2h2v-2zm-4-6h-2v10h2zm-8 2H3v2h2v6h2v-6h2v-2zm8-8h-2v2H9v2h6V6h-2zM5 4h2v6H5z"></svg:path>`,
})
export class PixelarticonsSlidersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
