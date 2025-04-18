import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsCheckmarkCircleSharpIcon],svg[famicons-checkmark-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m-38 312.38l-80.6-89.57l23.79-21.41l56 62.22L350 153.46L374.54 174Z"></svg:path>`,
})
export class FamiconsCheckmarkCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
