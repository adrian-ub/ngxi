import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageZoomInFillIcon],svg[mage-zoom-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.857 20.437l-5.23-5.22a8.27 8.27 0 1 0-1.41 1.41l5.22 5.23a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42m-7.72-9.29h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageZoomInFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
