import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siFileUploadDuotoneIcon],svg[si-file-upload-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.47 7.47a.75.75 0 0 0 1.06 1.06zM12 4l.53-.53a.75.75 0 0 0-1.06 0zm3.47 4.53a.75.75 0 1 0 1.06-1.06zM11.25 16a.75.75 0 0 0 1.5 0zm8.5 1a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm2.78-8.47l4-4l-1.06-1.06l-4 4zm2.94-4l4 4l1.06-1.06l-4-4zM11.25 4v12h1.5V4zm7 13v.6h1.5V17zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zm-1.65 1.65H7.4v1.5h9.2zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM5.75 17.6V17h-1.5v.6z"></svg:path>`,
})
export class SiFileUploadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
