import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityStorageLineIcon],svg[clarity-storage-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33 6.69c-.18-3.41-9.47-4.33-15-4.33S3 3.29 3 6.78v22.59c0 3.49 9.43 4.43 15 4.43s15-.93 15-4.43zm-2 7.56c-.33.86-5.06 2.45-13 2.45a37.5 37.5 0 0 1-11-1.36v2.08a43.3 43.3 0 0 0 11 1.28c4 0 9.93-.48 13-2v5.17c-.33.86-5.06 2.45-13 2.45a37.5 37.5 0 0 1-11-1.4V25a43.3 43.3 0 0 0 11 1.28c4 0 9.93-.48 13-2v5.1c-.35.86-5.08 2.45-13 2.45S5.3 30.2 5 29.37V6.82c.3-.82 5-2.46 13-2.46c7.77 0 12.46 1.53 13 2.37c-.52.87-5.21 2.39-13 2.39A37.6 37.6 0 0 1 7 7.76v2.09a43.5 43.5 0 0 0 11 1.27c4 0 9.93-.48 13-2Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityStorageLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
