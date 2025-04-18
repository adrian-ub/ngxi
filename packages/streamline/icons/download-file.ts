import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDownloadFileIcon],svg[streamline-download-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"></svg:path><svg:path d="m9 8l-2 2l-2-2m2 2V4.5"></svg:path></svg:g>`,
})
export class StreamlineDownloadFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
