import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFitToWidthIcon],svg[carbon-fit-to-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 11l-1.41 1.41L23.17 15H8.83l2.58-2.59L10 11l-5 5l5 5l1.41-1.41L8.83 17h14.34l-2.58 2.59L22 21l5-5z"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path>`,
})
export class CarbonFitToWidthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
