import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailDownloadLineIcon],svg[ri-mail-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7.238l-7.928 7.1L4 7.216V19h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8h-2zM19.501 5H4.511l7.55 6.662zM20 18h3l-4 4l-4-4h3v-4h2z"></svg:path>`,
})
export class RiMailDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
