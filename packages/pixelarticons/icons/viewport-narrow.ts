import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsViewportNarrowIcon],svg[pixelarticons-viewport-narrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H8v4h2V4h4v2h2V2zM8 20v-2h2v2h4v-2h2v4H8zm9-9h5v2h-5v2h-2v-2h-2v-2h2V9h2zm0-2V7h2v2zm0 6h2v2h-2zM2 11h5V9h2v2h2v2H9v2H7v-2H2zm5 4v2H5v-2zm0-6V7H5v2z"></svg:path>`,
})
export class PixelarticonsViewportNarrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
