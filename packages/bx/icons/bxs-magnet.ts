import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsMagnetIcon],svg[bx-bxs-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 3H5a1 1 0 0 0-1 1v3h5V4a1 1 0 0 0-1-1zm7 1v3h5V4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1zm0 10a3 3 0 0 1-6 0V9H4v5a8 8 0 0 0 16 0V9h-5v5z" fill="currentColor"></svg:path>`,
})
export class BxBxsMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
