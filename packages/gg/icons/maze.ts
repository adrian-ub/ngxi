import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMazeIcon],svg[gg-maze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.37 9.593L8.779 7L1 14.778l2.593 2.593zM15.222 7L23 14.778l-2.576 2.576l-5.202-5.202l-5.202 5.202l-2.576-2.576z"></svg:path>`,
})
export class GgMazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
