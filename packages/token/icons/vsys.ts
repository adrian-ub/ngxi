import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVsysIcon],svg[token-vsys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.149 4.5h5.155c.03 0 .052 0 .075.023q.038.018.06.055l6.273 10.415a.16.16 0 0 1 0 .18l-2.566 4.248a.16.16 0 0 1-.058.058a.154.154 0 0 1-.212-.058L3.02 4.75a.17.17 0 0 1 0-.164a.16.16 0 0 1 .053-.062a.15.15 0 0 1 .075-.024m10.805 0h6.896c.03 0 .052.008.075.023a.16.16 0 0 1 .052.063q.022.035.023.077c0 .039 0 .063-.023.086l-3.443 5.723a.16.16 0 0 1-.136.078a.15.15 0 0 1-.078-.021a.2.2 0 0 1-.057-.057L13.81 4.749a.17.17 0 0 1 .056-.223a.2.2 0 0 1 .08-.026z"></svg:path>`,
})
export class TokenVsysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
