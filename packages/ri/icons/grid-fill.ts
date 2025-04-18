import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGridFillIcon],svg[ri-grid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v4h-4v-4zm2 0h5v4h-5zm-2 11h-4v-5h4zm2 0v-5h5v4a1 1 0 0 1-1 1zM14 3v5h-4V3zm2 0h4a1 1 0 0 1 1 1v4h-5zm-8 7v4H3v-4zm0 11H4a1 1 0 0 1-1-1v-4h5zM8 3v5H3V4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiGridFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
