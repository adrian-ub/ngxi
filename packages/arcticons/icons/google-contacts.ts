import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleContactsIcon],svg[arcticons-google-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.72 23.085h4.433c4.826 0 8.744 3.918 8.744 8.744v2.928c0 4.825-3.918 8.743-8.744 8.743H9.863a2.24 2.24 0 0 1-2.238-2.237V36.18c0-7.227 5.868-13.095 13.095-13.095"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.847 23.085h8.784c4.826 0 8.744 3.918 8.744 8.744v2.928c0 4.825-3.918 8.743-8.744 8.743h-15.29a2.24 2.24 0 0 1-2.237-2.237V31.83c0-4.826 3.918-8.744 8.743-8.744"></svg:path><svg:circle cx="23.892" cy="12.186" r="7.686" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGoogleContactsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
