import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageZoomOutFillIcon],svg[mage-zoom-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.785 20.35l-5.22-5.22a8.18 8.18 0 1 0-1.41 1.42l5.22 5.22a1 1 0 1 0 1.41-1.42m-15.71-9.29a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageZoomOutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
