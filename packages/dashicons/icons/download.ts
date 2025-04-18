import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsDownloadIcon],svg[dashicons-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.01 4v6h2V2H4v8h2.01V4zm-2 2v6h3l-5 6l-5-6h3V6z"></svg:path>`,
})
export class DashiconsDownloadIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
