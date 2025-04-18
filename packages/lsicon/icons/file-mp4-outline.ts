import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMp4OutlineIcon],svg[lsicon-file-mp4-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M14 10h-1.5V7m1.5 3h1m-1 0V7m0 3v2m-4.5-2H11V7.5H9V12m-4.5 0V7.5H5l1 3l1-3h.5V12m4 1.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFileMp4OutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
