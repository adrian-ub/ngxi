import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsImageCropIcon],svg[dashicons-image-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12v3h-4v4h-3v-4H4V7H0V4h4V0h3v4h7l3-3l1 1l-3 3v7zm-8-5H7v4zm-3 5h4V8z"></svg:path>`,
})
export class DashiconsImageCropIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
