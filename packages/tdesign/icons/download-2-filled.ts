import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDownload2FilledIcon],svg[tdesign-download-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1v16h22zm-7.086 8.636L12 14.385l-3.914-3.75l1.383-1.444L11 10.657V6h2v4.657l1.531-1.466zM21 20H3v2h18z"></svg:path>`,
})
export class TdesignDownload2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
