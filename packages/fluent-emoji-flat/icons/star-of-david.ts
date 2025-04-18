import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatStarOfDavidIcon],svg[fluent-emoji-flat-star-of-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M30 26a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#fff" d="m12.825 10.5l2.309-4a1 1 0 0 1 1.732 0l2.31 4h4.618a1 1 0 0 1 .866 1.5l-2.31 4l2.31 4a1 1 0 0 1-.866 1.5h-4.619l-2.309 4a1 1 0 0 1-1.732 0l-2.31-4H8.207A1 1 0 0 1 7.34 20l2.31-4l-2.31-4a1 1 0 0 1 .866-1.5zm1.732 0h2.886L16 8zm-4.042 4L11.96 12H9.072zm.866 1.5l2.31 4h4.618l2.31-4l-2.31-4h-4.618zm-.866 1.5L9.072 20h2.887zm4.042 4L16 24l1.443-2.5zM20.04 20h2.887l-1.443-2.5zm1.444-5.5l1.443-2.5H20.04z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatStarOfDavidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
