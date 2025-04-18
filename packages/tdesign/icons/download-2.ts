import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDownload2Icon],svg[tdesign-download-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v16H1zm2 2v12h18V4zm10 2v4.657l1.53-1.466l1.384 1.445L12 14.385l-3.914-3.75L9.47 9.192L11 10.657V6zM3 20h18v2H3z"></svg:path>`,
})
export class TdesignDownload2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
