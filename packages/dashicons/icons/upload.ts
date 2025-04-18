import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsUploadIcon],svg[dashicons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14V8H5l5-6l5 6h-3v6zm-2 2v-6H4v8h12.01v-8H14v6z"></svg:path>`,
})
export class DashiconsUploadIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
