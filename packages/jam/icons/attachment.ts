import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamAttachmentIcon],svg[jam-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.433 5.359a.933.933 0 0 1 1.357 0c.375.39.375 1.022 0 1.412L8.26 18.78a4.663 4.663 0 0 1-6.783 0c-1.873-1.95-1.873-5.113 0-7.064L11.65 1.12a2.8 2.8 0 0 1 4.07 0c1.124 1.17 1.124 3.068 0 4.239L6.902 14.54a.933.933 0 0 1-1.356 0a1.03 1.03 0 0 1 0-1.412l8.818-9.183a1.03 1.03 0 0 0 0-1.413a.933.933 0 0 0-1.357 0L2.832 13.13c-1.123 1.17-1.123 3.068 0 4.238a2.8 2.8 0 0 0 4.07 0z"></svg:path>`,
})
export class JamAttachmentIcon {
  readonly viewBox = input("-1.5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
