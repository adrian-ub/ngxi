import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGifIcon],svg[pixelarticons-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h6v2H3v6h4v-2H5v-2h4v6H1V7zm14 0h6v2h-6v2h4v2h-4v4h-2V7zm-4 0h-2v10h2z"></svg:path>`,
})
export class PixelarticonsGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
