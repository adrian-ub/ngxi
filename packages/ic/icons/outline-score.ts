import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineScoreIcon],svg[ic-outline-score-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5l4-4l4 4l6-6zm0-8.5l-6 6l-4-4l-4 4V5h14zM13.5 9V6H12v6h1.5zm3.7 3l-2-3l2-3h-1.7l-2 3l2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z"></svg:path>`,
})
export class IcOutlineScoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
