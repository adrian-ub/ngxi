import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherUploadCloudIcon],svg[feather-upload-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 16l-4-4l-4 4m4-4v9"></svg:path><svg:path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></svg:path><svg:path d="m16 16l-4-4l-4 4"></svg:path></svg:g>`,
})
export class FeatherUploadCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
