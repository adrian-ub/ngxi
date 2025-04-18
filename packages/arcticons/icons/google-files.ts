import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleFilesIcon],svg[arcticons-google-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 35.5V24L24 8.5h15.5a4 4 0 0 1 4 4v23a4 4 0 0 1-4 4h-31a4 4 0 0 1-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.226 11.5H8.5a4 4 0 0 0-4 4V24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 24H20a4 4 0 0 0 4-4V8.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 8.5l-4.279 8.985a4 4 0 0 1-2.307 2.062L4.5 24"></svg:path>`,
})
export class ArcticonsGoogleFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
