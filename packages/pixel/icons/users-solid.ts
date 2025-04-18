import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUsersSolidIcon],svg[pixel-users-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13v-1H1v-2h1V9h5v3h1v1zm3-6H4V5h1V4h2v1h1v1H7v2H5zm3 0h1V6h1V5h4v1h1v1h1v4h-1v1h-1v1h-4v-1H9v-1H8zm11 11h1v3h-1v1H5v-1H4v-3h1v-1h1v-1h2v-1h8v1h2v1h1zm4-8v2h-1v1h-6v-1h1V9h5v1zm-6-4h-1V5h1V4h2v1h1v2h-1v1h-2z"></svg:path>`,
})
export class PixelUsersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
