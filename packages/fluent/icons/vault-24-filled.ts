import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVault24FilledIcon],svg[fluent-vault-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M2 7.75A3.75 3.75 0 0 1 5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25zM5.75 7a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5A.75.75 0 0 0 5.75 7m5.53 1.22a.75.75 0 1 0-1.06 1.06l1.195 1.196A3 3 0 0 0 11 12c0 .556.151 1.077.415 1.524L10.22 14.72a.75.75 0 1 0 1.06 1.06l1.196-1.195c.447.264.968.415 1.524.415s1.077-.151 1.524-.415l1.196 1.195a.75.75 0 1 0 1.06-1.06l-1.195-1.196c.264-.447.415-.968.415-1.524s-.151-1.077-.415-1.524L17.78 9.28a.75.75 0 0 0-1.06-1.06l-1.196 1.195A3 3 0 0 0 14 9c-.556 0-1.077.151-1.524.415z"></svg:path>`,
})
export class FluentVault24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
