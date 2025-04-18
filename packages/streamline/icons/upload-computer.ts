import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUploadComputerIcon],svg[streamline-upload-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11 2h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h2m3 9l-1 2.5M8 11l1 2.5m-5 0h6m-3-7v-6"></svg:path><svg:path d="m5 2.5l2-2l2 2"></svg:path></svg:g>`,
})
export class StreamlineUploadComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
