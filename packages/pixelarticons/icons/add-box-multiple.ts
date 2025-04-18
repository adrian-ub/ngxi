import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddBoxMultipleIcon],svg[pixelarticons-add-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h14v14H3zm12 12V5H5v10zm-8 6v-2h12V7h2v14zm4-12h2v2h-2v2H9v-2H7V9h2V7h2z"></svg:path>`,
})
export class PixelarticonsAddBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
