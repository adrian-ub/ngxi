import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPaintBucketIcon],svg[pixelarticons-paint-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v2H8zm0 2H6v4H4v12h16V9h-2V5h-2v4H8zm8 6h2v8H6v-8h2v6h2v-4h2v2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsPaintBucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
