import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsStoreIcon],svg[pixelarticons-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16v2H4zm0 4h18v8h-2v6h-2v-6h-4v6H4v-6H2V7zm8 12v-4H6v4zm0-6h8V9H4v4z"></svg:path>`,
})
export class PixelarticonsStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
