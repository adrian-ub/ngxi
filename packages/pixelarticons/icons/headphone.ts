import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsHeadphoneIcon],svg[pixelarticons-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H5v2H3v14h7v-8H5V6h14v6h-5v8h7V6h-2zm-3 10h3v4h-3zm-8 0v4H5v-4z"></svg:path>`,
})
export class PixelarticonsHeadphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
