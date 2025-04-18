import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDownloadComputerIcon],svg[streamline-download-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v6m-2-2l2 2l2-2"></svg:path><svg:path d="M9.5 2H13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h3.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path></svg:g>`,
})
export class StreamlineDownloadComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
