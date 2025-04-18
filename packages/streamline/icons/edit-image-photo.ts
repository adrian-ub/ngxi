import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEditImagePhotoIcon],svg[streamline-edit-image-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.5 8.5l-4.71 4.71l-2.13.29l.3-2.13l4.7-4.71zm-9.219 5H1.8a1.3 1.3 0 0 1-1.3-1.3V1.8A1.3 1.3 0 0 1 1.8.5h10.4a1.3 1.3 0 0 1 1.3 1.3v2.95"></svg:path><svg:path d="M9.014 4.795a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M.5 7.164a10.3 10.3 0 0 1 6.5.961"></svg:path></svg:g>`,
})
export class StreamlineEditImagePhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
