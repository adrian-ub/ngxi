import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneParallelogramIcon],svg[icon-park-twotone-parallelogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTParallelogram0"><svg:path fill="#555" stroke="#fff" stroke-width="4" d="M41.28 8H15.47a2 2 0 0 0-1.909 1.403l-8.75 28A2 2 0 0 0 6.721 40H32.53a2 2 0 0 0 1.909-1.404l8.75-28A2 2 0 0 0 41.279 8Z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTParallelogram0)"></svg:path>`,
})
export class IconParkTwotoneParallelogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
