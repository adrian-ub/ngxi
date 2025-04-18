import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFaceWinkFilledIcon],svg[carbon-face-wink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M8 13h6v2H8Zm8 11a8 8 0 0 1-6.85-3.89l1.71-1a6 6 0 0 0 10.28 0l1.71 1A8 8 0 0 1 16 24m4.5-8a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CarbonFaceWinkFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
