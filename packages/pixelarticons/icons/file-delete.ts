import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileDeleteIcon],svg[pixelarticons-file-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22h10V8h-2V6h-2v2h-2V6h2V4h-2V2H3v12h2V4h8v6h6v10h-8zm-4-2H5v2H3v-2h2v-2H3v-2h2v2h2v-2h2v2H7zm0 0h2v2H7z"></svg:path>`,
})
export class PixelarticonsFileDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
