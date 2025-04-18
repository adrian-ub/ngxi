import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDiggIcon],svg[pixel-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5h2v2H8zM5 5v3H2v8h5V5zm0 9H4v-4h1zm3-6h2v8H8zm3 0v8h3v1h-3v2h5V8zm2 2h1v4h-1zm4-2v8h3v1h-3v2h5V8zm2 2h1v4h-1z"></svg:path>`,
})
export class PixelDiggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
