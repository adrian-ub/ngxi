import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidInboxUploadRIcon],svg[icon-park-solid-inbox-upload-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSInboxUploadR0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M4 31h11l2 4h14l2-4h11"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M42 36V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m18 18l6-6l6 6m-6-6v16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 36V26"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSInboxUploadR0)"></svg:path>`,
})
export class IconParkSolidInboxUploadRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
