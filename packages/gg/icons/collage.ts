import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCollageIcon],svg[gg-collage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm9-1h4a1 1 0 0 1 1 1v8h-5zm0 11v5h4a1 1 0 0 0 1-1v-4zM11 4H7a1 1 0 0 0-1 1v3h5zM6 19v-9h5v10H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgCollageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
