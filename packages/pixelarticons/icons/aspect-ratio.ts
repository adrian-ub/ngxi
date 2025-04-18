import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAspectRatioIcon],svg[pixelarticons-aspect-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h20v16H2zm2 14h16V6H4zM8 8h2v2H8v2H6V8zm8 8h-2v-2h2v-2h2v4z"></svg:path>`,
})
export class PixelarticonsAspectRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
