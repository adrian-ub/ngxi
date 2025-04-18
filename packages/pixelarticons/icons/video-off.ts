import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsVideoOffIcon],svg[pixelarticons-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5H2v14h14v-4h2v2h2v2h2V5h-2v2h-2v2h-2V5zm10 12H4V7h10zm-4-6H8V9H6v2h2v2H6v2h2v-2h2v2h2v-2h-2zm0 0V9h2v2z"></svg:path>`,
})
export class PixelarticonsVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
