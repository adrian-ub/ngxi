import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiHammerIcon],svg[arcticons-emoji-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.28 13.336l-.02 15.804l.862 2.597l-.018 11.256l-.867.001l-2.6.005l-.868.001l.018-11.256l.871-2.6l.021-15.808z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.549 6.24a43.5 43.5 0 0 0-9.134 0v2.127h-2.131l.006-1.497s0 0 0 0c-.737-.73-2.536-.724-3.267.011L13 12.629c.806.532 2.465.528 3.267-.011l.006-1.634h2.142v2.352h9.134V9.28s6.089 0 8.118 2.027A10.87 10.87 0 0 0 27.55 6.24m-11.26.63"></svg:path>`,
})
export class ArcticonsEmojiHammerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
