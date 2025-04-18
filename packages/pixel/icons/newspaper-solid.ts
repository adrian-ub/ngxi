import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelNewspaperSolidIcon],svg[pixel-newspaper-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V5H3v1H2v1H1v11h1v1h20v-1h1V6zM4 17H3V7h1zm8-2H6v-5h6zm9 0h-8v-1h8zm-8-2v-1h7v1zm8-2h-8v-1h8zm0-2H6V7h15z"></svg:path><svg:path fill="currentColor" d="M7 11h4v3H7z"></svg:path>`,
})
export class PixelNewspaperSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
