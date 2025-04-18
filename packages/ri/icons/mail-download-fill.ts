import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailDownloadFillIcon],svg[ri-mail-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.803A6 6 0 0 0 13.803 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-1.12L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513zM20 18h3l-4 4l-4-4h3v-4h2z"></svg:path>`,
})
export class RiMailDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
