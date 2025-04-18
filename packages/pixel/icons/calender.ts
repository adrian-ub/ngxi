import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCalenderIcon],svg[pixel-calender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1h2v1h-2zm6 4V4h-3V2h-1v5h-2V2h-1v2H9V2H8v5H6V2H5v2H2v1H1v17h1v1h20v-1h1V5zM2 6h1V5h2v2H2zm4 16H3v-1H2v-3h4zm0-5H2v-4h4zm0-5H2V8h4zm11-4v4h-4V8zm0 9h-4v-4h4zM9 5h6v2H9zm2 17H7v-4h4zm0-5H7v-4h4zm0-5H7V8h4zm2 10v-4h4v4zm9-1h-1v1h-3v-4h4zm0-4h-4v-4h4zm0-5h-4V8h4zm0-5h-3V5h2v1h1zM6 1h2v1H6z"></svg:path>`,
})
export class PixelCalenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
