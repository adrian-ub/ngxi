import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLabelSharpIcon],svg[pixelarticons-label-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H2v4h2v2h2v2H4v2H2v4h14v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2zm0 2v2h2v2h2v2h-2v2h-2v2H4v-2h2v-2h2v-2H6V9H4V7z"></svg:path>`,
})
export class PixelarticonsLabelSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
