import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpeedSlowIcon],svg[pixelarticons-speed-slow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5h6v2H9zm10 4h-4V7h4zm2 2h-2V9h2zm0 6v-6h2v6zm0 0v2h-2v-2zM1 11h2v6H1zm2 6h2v2H3zm11-4h-4v-2H8V9H6V7H4v2h2v2h2v2h2v4h4z"></svg:path>`,
})
export class PixelarticonsSpeedSlowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
