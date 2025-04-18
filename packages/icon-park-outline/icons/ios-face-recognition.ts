import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIosFaceRecognitionIcon],svg[icon-park-outline-ios-face-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 34v10h10m20 0h10V34M34 4h10v10M14 4H4v10m12 20s3 3 8 3s8-3 8-3m-8-20v9c0 2-2 4-4 4h-1m15-13v2m-20-2v2"></svg:path>`,
})
export class IconParkOutlineIosFaceRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
