import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonZoomInIcon],svg[carbon-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12h-4V8h-2v4H8v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M21.448 20A10.86 10.86 0 0 0 24 13a11 11 0 1 0-11 11a10.86 10.86 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"></svg:path>`,
})
export class CarbonZoomInIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
