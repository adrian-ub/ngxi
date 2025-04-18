import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineParallelogramIcon],svg[icon-park-outline-parallelogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="4" d="M41.28 8H15.47a2 2 0 0 0-1.909 1.403l-8.75 28A2 2 0 0 0 6.721 40H32.53a2 2 0 0 0 1.909-1.404l8.75-28A2 2 0 0 0 41.279 8Z"></svg:path>`,
})
export class IconParkOutlineParallelogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
