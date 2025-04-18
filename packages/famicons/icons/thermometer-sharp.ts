import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsThermometerSharpIcon],svg[famicons-thermometer-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 291.24V80a64 64 0 1 0-128 0v211.24A113.39 113.39 0 0 0 144 384a112 112 0 0 0 224 0a113.39 113.39 0 0 0-48-92.76M256 432a48 48 0 0 1-16-93.26V96h32v242.74A48 48 0 0 1 256 432"></svg:path>`,
})
export class FamiconsThermometerSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
