import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelWindowCloseSolidIcon],svg[pixel-window-close-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2V1H2v1H1v20h1v1h20v-1h1V2zm-4 7h-1v1h-1v1h-1v2h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-2v1h-1v1H9v1H8v-1H7v-1H6v-1h1v-1h1v-1h1v-2H8v-1H7V9H6V8h1V7h1V6h1v1h1v1h1v1h2V8h1V7h1V6h1v1h1v1h1z"></svg:path>`,
})
export class PixelWindowCloseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
