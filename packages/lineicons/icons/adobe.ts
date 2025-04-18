import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsAdobeIcon],svg[lineicons-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.58 3.629H22v16.645zm-5.16 0H2v16.645zM12 9.855l4.645 10.516h-3.129l-1.355-3.355h-3.42z"></svg:path>`,
})
export class LineiconsAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
