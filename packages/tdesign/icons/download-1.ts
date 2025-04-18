import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDownload1Icon],svg[tdesign-download-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v9.586l4-4L18.414 10L12 16.414L5.586 10L7 8.586l4 4V3zM3 18h18v2H3z"></svg:path>`,
})
export class TdesignDownload1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
