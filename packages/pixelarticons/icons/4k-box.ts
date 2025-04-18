import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticons4kBoxIcon],svg[pixelarticons-4k-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4H1v16h22V4zm18 2v12H3V6zM7 8H5v5h4v3h2V8H9v3H7zm8 0h-2v8h2v-3h2v3h2v-3h-2v-2h2V8h-2v3h-2z"></svg:path>`,
})
export class Pixelarticons4kBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
