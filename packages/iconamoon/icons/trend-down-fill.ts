import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonTrendDownFillIcon],svg[iconamoon-trend-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 17.01V13a1 1 0 0 0-1.707-.707L19 13.586l-5.293-5.293a1 1 0 0 0-1.414 0L9 11.586L3.707 6.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0L13 10.414L17.586 15l-1.293 1.293A1 1 0 0 0 17 18h4l.048-.001a.997.997 0 0 0 .952-.99" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonTrendDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
