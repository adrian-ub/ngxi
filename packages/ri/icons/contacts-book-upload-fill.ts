import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContactsBookUploadFillIcon],svg[ri-contacts-book-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2v20H3V2zm12.005 0C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H9V2zM15 8l-4 4h3v4h2v-4h3zm9 4v4h-2v-4zm0-6v4h-2V6z"></svg:path>`,
})
export class RiContactsBookUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
