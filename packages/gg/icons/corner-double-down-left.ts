import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerDoubleDownLeftIcon],svg[gg-corner-double-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.295 7.694l4.84-5.056l5.057 4.84l-1.383 1.445l-2.462-2.357l.162 6.034a4.8 4.8 0 0 1-4.67 4.927l-5.925.16l2.294 2.246l-1.4 1.43l-5-4.9l4.898-5l1.429 1.4l-2.377 2.427l6.017-.162a2.4 2.4 0 0 0 2.335-2.463l-.158-5.898l-2.212 2.31z"></svg:path>`,
})
export class GgCornerDoubleDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
