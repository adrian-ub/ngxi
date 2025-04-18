import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLabelAltMultipleIcon],svg[pixelarticons-label-alt-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5H6v10h12v-2h2v-2h2V9h-2V7h-2V5zm10 2v2h2v2h-2v2H8V7zM4 9H2v10h12v-2H4z"></svg:path>`,
})
export class PixelarticonsLabelAltMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
