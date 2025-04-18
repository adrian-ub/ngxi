import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DownloadIcon],svg[icons8-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v16.563L9.72 15.28l-1.44 1.44l7 7l.72.686l.72-.687l7-7l-1.44-1.44L17 20.564V4zM7 27v2h18v-2z"></svg:path>`,
})
export class Icons8DownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
