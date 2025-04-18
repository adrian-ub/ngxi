import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPanHorizontalIcon],svg[carbon-pan-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 10l-1.414 1.414L26.172 15H5.828l3.586-3.586L8 10l-6 6l6 6l1.414-1.414L5.828 17h20.344l-3.586 3.586L24 22l6-6z"></svg:path>`,
})
export class CarbonPanHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
