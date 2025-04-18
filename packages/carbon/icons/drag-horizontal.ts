import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDragHorizontalIcon],svg[carbon-drag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v11H5.83l2.58-2.59L7 11l-5 5l5 5l1.41-1.41L5.83 17H12v11h2V4zm13 7l-1.41 1.41L26.17 15H20V4h-2v24h2V17h6.17l-2.58 2.59L25 21l5-5z"></svg:path>`,
})
export class CarbonDragHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
