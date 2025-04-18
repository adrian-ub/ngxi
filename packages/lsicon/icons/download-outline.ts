import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDownloadOutlineIcon],svg[lsicon-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.55 9.529v3.996H2.501V9.53M8 2l-.022 8.097m3.286-3.035l-3.285 3.285l-3.286-3.285"></svg:path>`,
})
export class LsiconDownloadOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
