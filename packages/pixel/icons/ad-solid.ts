import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelAdSolidIcon],svg[pixel-ad-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zM9 8v1h1v1h1v7H9v-2H6v2H4v-7h1V9h1V8h1V7h1v1zm4 8v-5h1v-1h4V7h2v9h-1v1h-5v-1z"></svg:path><svg:path fill="currentColor" d="M9 11v2H6v-2h1v-1h1v1zm6 1h3v3h-3z"></svg:path>`,
})
export class PixelAdSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
