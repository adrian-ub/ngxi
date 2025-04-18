import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsPinIcon],svg[pixelarticons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v2H7zM5 6V4h2v2zm0 8H3V6h2zm2 2H5v-2h2zm2 2H7v-2h2zm2 2H9v-2h2zm2 0v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm2-2v2h-2v-2zm0-8h2v8h-2zm0 0V4h-2v2zm-5 2h-4v4h4z"></svg:path>`,
})
export class PixelarticonsPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
