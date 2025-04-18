import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFitToHeightIcon],svg[carbon-fit-to-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 10l1.41 1.41L15 8.83v14.34l-2.59-2.58L11 22l5 5l5-5l-1.41-1.41L17 23.17V8.83l2.59 2.58L21 10l-5-5z"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path>`,
})
export class CarbonFitToHeightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
