import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsHeartSquareIcon],svg[bxs-heart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1M7.812 8.907a2.746 2.746 0 0 1 3.907 0l.279.279l.278-.279a2.746 2.746 0 0 1 3.907 0a2.745 2.745 0 0 1 0 3.907L11.998 17l-4.187-4.186a2.747 2.747 0 0 1 .001-3.907"></svg:path>`,
})
export class BxsHeartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
