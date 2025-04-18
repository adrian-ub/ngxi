import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUploadStroke16Icon],svg[garden-upload-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M8.5 14.5V9m2.5 5.5c2.49 0 4.5-2.01 4.5-4.5S13.49 5.5 11 5.5c-.21 0-.42.03-.62.06c-.43-1.75-2-3.06-3.88-3.06c-2.21 0-4 1.79-4 4c0 .44.09.85.22 1.25A3.49 3.49 0 0 0 .5 11c0 1.93 1.57 3.5 3.5 3.5h2M6 11l2.15-2.15c.2-.2.51-.2.71 0L11 11"></svg:path>`,
})
export class GardenUploadStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
