import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCopyFileIcon],svg[carbon-copy-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.4 14.7l-6.1-6.1C21 8.2 20.5 8 20 8h-8c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V16.1c0-.5-.2-1-.6-1.4M20 10l5.9 6H20zm-8 18V10h6v6c0 1.1.9 2 2 2h6v10z"></svg:path><svg:path fill="currentColor" d="M6 18H4V4c0-1.1.9-2 2-2h14v2H6z"></svg:path>`,
})
export class CarbonCopyFileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
