import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFloatCenterIcon],svg[pixelarticons-float-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h6v8H8V4zm4 6V6h-4v4zM2 6h4v2H2zm20 0h-4v2h4zm0 4h-4v2h4zM6 10H2v2h4zm-4 4h20v2H2zm20 4H2v2h20z"></svg:path>`,
})
export class PixelarticonsFloatCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
