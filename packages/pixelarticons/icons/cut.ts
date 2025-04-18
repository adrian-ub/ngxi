import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCutIcon],svg[pixelarticons-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v2H2zm4 4H4V4h2zm2 2H6V6h2zm2 2V8H8v2zm4 0h-4v4H2v8h8v-8h4v8h8v-8h-8zm2-2v2h-2V8zm2-2v2h-2V6zm2-2h-2v2h2zm0 0V2h2v2zM4 20v-4h4v4zm12 0v-4h4v4z"></svg:path>`,
})
export class PixelarticonsCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
