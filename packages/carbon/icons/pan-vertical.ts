import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPanVerticalIcon],svg[carbon-pan-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 8l1.414 1.414L15 5.828v20.344l-3.586-3.586L10 24l6 6l6-6l-1.414-1.414L17 26.172V5.828l3.586 3.586L22 8l-6-6z"></svg:path>`,
})
export class CarbonPanVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
