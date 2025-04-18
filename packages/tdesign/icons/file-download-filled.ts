import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileDownloadFilledIcon],svg[tdesign-file-download-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h10.876A6.5 6.5 0 0 1 21 12.814V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-1 14.11V14h-2v7.11l-2.508-2.48l-1.406 1.422L19 24.91l4.914-4.858l-1.406-1.422z"></svg:path>`,
})
export class TdesignFileDownloadFilledIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
