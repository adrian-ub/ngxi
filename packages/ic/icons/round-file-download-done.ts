import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundFileDownloadDoneIcon],svg[ic-round-file-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.42 4.71a.996.996 0 0 0-1.41 0L9.53 13.2L5.99 9.66a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.19-9.19c.4-.39.4-1.02 0-1.41M6 20h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class IcRoundFileDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
