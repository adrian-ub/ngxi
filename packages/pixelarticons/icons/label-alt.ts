import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLabelAltIcon],svg[pixelarticons-label-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H2v14h14v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2zm0 2v2h2v2h2v2h-2v2h-2v2H4V7z"></svg:path>`,
})
export class PixelarticonsLabelAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
