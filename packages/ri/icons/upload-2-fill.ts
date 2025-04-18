import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUpload2FillIcon],svg[ri-upload-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2zM14 9v6h-4V9H5l7-7l7 7z"></svg:path>`,
})
export class RiUpload2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
