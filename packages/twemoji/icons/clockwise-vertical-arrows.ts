import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiClockwiseVerticalArrowsIcon],svg[twemoji-clockwise-vertical-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3B88C3" d="M4 36a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4z"></svg:path><svg:path fill="#FFF" d="m26 30.2l6-7.2h-4v-8c0-5.523-4.477-10-10-10a9.95 9.95 0 0 0-3.977.827l2.75 3.3A6 6 0 0 1 24 15v8h-4zm-4.023-.026l-2.749-3.301A6 6 0 0 1 12 21v-8h4l-6-7.2L4 13h4v8c0 5.522 4.477 10 10 10a10 10 0 0 0 3.977-.826"></svg:path>`,
})
export class TwemojiClockwiseVerticalArrowsIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
