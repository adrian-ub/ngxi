import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutDistributeHorizontalIcon],svg[pixelarticons-layout-distribute-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4H4v16h2zm14 0h-2v16h2zM10 7h6v10H8V7zm4 8V9h-4v6z"></svg:path>`,
})
export class PixelarticonsLayoutDistributeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
