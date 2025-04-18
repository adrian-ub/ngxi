import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggHomeScreenIcon],svg[gg-home-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2-13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm8 2H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgHomeScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
