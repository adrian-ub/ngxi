import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDropboxOriginalIcon],svg[lineicons-dropbox-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 35.2l15.5 9.9L32 35.2l-15.5-9.8zm15.4 13.3L32 58.4l15.5-9.9L32 38.6zM32 35.2l15.5 9.9L63 35.2l-15.5-9.8zM16.5 5.6L1 15.5l15.5 9.9L32 15.5zM63 15.5L47.5 5.6L32 15.5l15.5 9.9z"></svg:path>`,
})
export class LineiconsDropboxOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
