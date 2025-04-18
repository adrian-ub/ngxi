import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelMessageSolidIcon],svg[pixel-message-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2v16h-1v1h-9v1h-2v1h-1v1H9v1H8v-4H2v-1H1V2h1V1h20v1z"></svg:path>`,
})
export class PixelMessageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
