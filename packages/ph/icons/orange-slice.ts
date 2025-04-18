import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOrangeSliceIcon],svg[ph-orange-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 80H8a8 8 0 0 0-8 8a128 128 0 0 0 256 0a8 8 0 0 0-8-8M77.4 149.91l42.6-42.6v60.29a79.6 79.6 0 0 1-42.6-17.69M66.09 138.6A79.6 79.6 0 0 1 48.4 96h60.29ZM136 107.31l42.6 42.6A79.6 79.6 0 0 1 136 167.6Zm53.91 31.29L147.31 96h60.29a79.6 79.6 0 0 1-17.69 42.6M128 200A112.15 112.15 0 0 1 16.28 96h16.06a96 96 0 0 0 191.32 0h16.06A112.15 112.15 0 0 1 128 200"></svg:path>`,
})
export class PhOrangeSliceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
