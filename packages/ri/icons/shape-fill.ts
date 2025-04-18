import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShapeFillIcon],svg[ri-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6m14 0a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6M5 22a3 3 0 1 1 0-6a3 3 0 0 1 0 6M9 4h6v2H9zm0 14h6v2H9zM4 9h2v6H4zm14 0h2v6h-2z"></svg:path>`,
})
export class RiShapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
