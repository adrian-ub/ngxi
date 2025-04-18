import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFrameAddIcon],svg[pixelarticons-frame-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12zm-7-7h3v2h-3v3h-2v-3H8v-2h3V9h2z"></svg:path>`,
})
export class PixelarticonsFrameAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
