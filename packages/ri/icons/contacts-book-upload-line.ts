import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContactsBookUploadLineIcon],svg[ri-contacts-book-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.005 2C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zM7 4H5v16h2zm12 0H9v16h10zm-5 4l4 4h-3v4h-2v-4h-3zm10 4v4h-2v-4zm0-6v4h-2V6z"></svg:path>`,
})
export class RiContactsBookUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
