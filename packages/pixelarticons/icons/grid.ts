import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGridIcon],svg[pixelarticons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v4h4V4zm6 0v4h4V4zm6 0v4h4V4zm4 6h-4v4h4zm0 6h-4v4h4zm-6 4v-4h-4v4zm-6 0v-4H4v4zm-4-6h4v-4H4zm6-4v4h4v-4z"></svg:path>`,
})
export class PixelarticonsGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
