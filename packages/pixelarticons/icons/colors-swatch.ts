import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsColorsSwatchIcon],svg[pixelarticons-colors-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h8v20H12V2zm6 2h-6v16h6zM10 20H4v-6h6v-2H6v-2H4V8h2V6h2V4h2V2H8v2H6v2H4v2H2v2h2v2H2v10h8zm8-4h-2v2h2z"></svg:path>`,
})
export class PixelarticonsColorsSwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
