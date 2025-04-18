import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonZoomFitIcon],svg[carbon-zoom-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.448 20A10.86 10.86 0 0 0 24 13a11 11 0 1 0-11 11a10.86 10.86 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"></svg:path><svg:path fill="currentColor" d="M10 12H8v-2a2 2 0 0 1 2-2h2v2h-2zm8 0h-2v-2h-2V8h2a2 2 0 0 1 2 2zm-6 6h-2a2 2 0 0 1-2-2v-2h2v2h2zm4 0h-2v-2h2v-2h2v2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonZoomFitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
