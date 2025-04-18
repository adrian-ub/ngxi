import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsUberSymbolIcon],svg[lineicons-uber-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.364 3h15.272C20.39 3 21 3.61 21 4.364v15.272C21 20.39 20.39 21 19.636 21H4.364C3.61 21 3 20.39 3 19.636V4.364C3 3.61 3.61 3 4.364 3m2.21 8.455h3.79v-.819c0-.15.122-.272.273-.272h2.727c.15 0 .273.122.273.272v2.728c0 .15-.122.272-.273.272h-2.727a.273.273 0 0 1-.273-.272v-.819h-3.79a5.455 5.455 0 1 0 0-1.09"></svg:path>`,
})
export class LineiconsUberSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
