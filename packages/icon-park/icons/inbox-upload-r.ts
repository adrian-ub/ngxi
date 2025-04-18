import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxUploadRIcon],svg[icon-park-inbox-upload-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M4 31H15L17 35H31L33 31H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 36V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18L24 12L30 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 12V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 36V26"></svg:path></svg:g>`,
})
export class IconParkInboxUploadRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
