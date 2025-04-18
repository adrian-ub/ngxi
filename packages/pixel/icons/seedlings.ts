import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSeedlingsIcon],svg[pixel-seedlings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2v1h-2v1h-2v1h-1v1h-1v2h1v2h1v2h2v-1h2v-1h2V9h1V8h1V6h1V2zm2 4v2h-2v1h-2v1h-1V8h-1V6h2V5h2V4h3v2zm-8 3h-1V8h-1V7H8V6H6V5H1v3h1v2h1v2h1v1h1v1h2v1h4v7h2V11h-1zm-7 3v-2H4V8H3V7h3v1h2v1h2v2h1v2H7v-1z"></svg:path>`,
})
export class PixelSeedlingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
