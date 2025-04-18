import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopCodeSolidIcon],svg[streamline-desktop-code-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.832C0 1.027.652.375 1.457.375h11.086c.805 0 1.457.652 1.457 1.457v7.586c0 .805-.652 1.457-1.457 1.457H8.517l.535 1.495H10a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h.948l.535-1.495H1.457A1.457 1.457 0 0 1 0 9.418zm5.53 1.76a.75.75 0 0 1 0 1.061l-.97.97l.97.97a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5a.75.75 0 0 1 1.06 0Zm4 0a.75.75 0 0 0-1.06 1.061l.97.97l-.97.97a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDesktopCodeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
