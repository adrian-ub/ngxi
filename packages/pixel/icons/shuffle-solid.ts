import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelShuffleSolidIcon],svg[pixel-shuffle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14h1v3H8v1H7v1H1v-3h6v-1h1z"></svg:path><svg:path fill="currentColor" d="M22 17h1v1h-1v1h-1v1h-1v1h-1v1h-1v-3h-4v-1h-1v-1h-1v-2h-1v-1h-1v-2H9v-1H8V9H7V8H1V5h7v1h1v2h1v2h1v1h1v2h1v1h1v2h4v-3h1v1h1v1h1v1h1z"></svg:path><svg:path fill="currentColor" d="M23 6v1h-1v1h-1v1h-1v1h-1v1h-1V8h-4v1h-1v1h-1V7h1V6h1V5h4V2h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelShuffleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
