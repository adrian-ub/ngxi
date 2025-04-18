import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpeedMediumIcon],svg[pixelarticons-speed-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h-2v8h-1v4h4v-4h-1zM9 7H5v2H3v2H1v6h2v2h2v-2H3v-6h2V9h4zm12 4h2v6h-2zm-2-2h2v2h-2zm0 0h-4V7h4zm2 8v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsSpeedMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
