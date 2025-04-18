import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAnnularFilledIcon],svg[lsicon-annular-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.5.993l.576.09a7.002 7.002 0 0 1 4.632 10.97l-.326.458l-3.336-3.023l.177-.342a2.5 2.5 0 0 0-1.39-3.504L8.5 5.524zm-1 0v4.531l-.333.118a2.501 2.501 0 1 0 2.083 4.524l.374-.217l2.782 3.517l-.44.303A7 7 0 1 1 6.924 1.082z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAnnularFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
