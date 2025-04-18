import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDownloadIcon],svg[lineicons-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 44c-1.2 0-2.3 1-2.3 2.3v8.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-8.9C6.3 45 5.2 44 4 44s-2.3 1-2.3 2.3v8.9c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-8.9c.1-1.3-1-2.3-2.2-2.3"></svg:path><svg:path fill="currentColor" d="M30.4 46.5c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l14.5-14.1c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0L34.3 39.6V5c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v34.6L19.1 29.2c-.9-.9-2.3-.8-3.2 0c-.9.9-.8 2.3 0 3.2z"></svg:path>`,
})
export class LineiconsDownloadIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
