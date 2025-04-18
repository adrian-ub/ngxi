import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFileMultipleIcon],svg[pixelarticons-file-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18H7V2h8v2h2v2h-2v2h2V6h2v2h2zM9 4v12h10v-6h-6V4zM3 6h2v14h12v2H3z"></svg:path>`,
})
export class PixelarticonsFileMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
