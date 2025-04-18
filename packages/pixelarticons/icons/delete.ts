import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDeleteIcon],svg[pixelarticons-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H7v2H5v2H3v2H1v2h2v2h2v2h2v2h16V5zM7 17v-2H5v-2H3v-2h2V9h2V7h14v10zm8-6h-2V9h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2zm0 0V9h2v2z"></svg:path>`,
})
export class PixelarticonsDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
