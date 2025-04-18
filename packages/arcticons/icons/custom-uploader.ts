import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCustomUploaderIcon],svg[arcticons-custom-uploader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33 24l-8.935 6.187L15 24l9 18zm3-6l6-12l-18 8L6 6l6 12l12 5.29zm-21 6l-3-6m24 0l-3 6"></svg:path>`,
})
export class ArcticonsCustomUploaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
