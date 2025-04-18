import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageFlashIcon],svg[pixelarticons-image-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 0h2v4h4v2h-2v2h-2v2h-2V6h-4V4h2V2h2zM4 3h8v2H4v14h16v-7h2v9H2V3zm10 6h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2zM8 7H6v2h2z"></svg:path>`,
})
export class PixelarticonsImageFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
