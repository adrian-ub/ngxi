import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFrameCheckIcon],svg[pixelarticons-frame-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12zm-4-9h-2v2h-2v2h-2v-2H8v2h2v2h2v-2h2v-2h2z"></svg:path>`,
})
export class PixelarticonsFrameCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
