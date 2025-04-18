import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDropboxIcon],svg[streamline-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.976 11.643l2.026 1.388l2.026-1.388M7 8.58l3.213-2.201l3.212 2.201l-3.212 2.201zm0-4.406l3.213-2.201l3.212 2.2l-3.212 2.202zM.575 8.58l3.212-2.2L7 8.58l-3.212 2.201zm0-4.406l3.212-2.201L7 4.173L3.787 6.376z"></svg:path>`,
})
export class StreamlineDropboxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
