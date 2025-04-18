import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laChessBoardIcon],svg[la-chess-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v3h3V4zm3 3v3h3V7zm3 0h3V4h-3zm3 0v3h3V7zm3 0h3V4h-3zm3 0v3h3V7zm3 0h3V4h-3zm0 3v3h3v-3zm0 3h-3v3h3zm0 3v3h3v-3zm0 3h-3v3h3zm0 3v3h3v-3zm0 3h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3zm-3 0v-3H7v3zm-3 0H4v3h3zm0-3v-3H4v3zm0-3h3v-3H7zm0-3v-3H4v3zm0-3h3v-3H7zm0-3V7H4v3zm3 3v3h3v-3zm3 0h3v-3h-3zm3 0v3h3v-3zm3 0h3v-3h-3zm0 3v3h3v-3zm0 3h-3v3h3zm-3 0v-3h-3v3zm-3 0h-3v3h3z"></svg:path>`,
})
export class LaChessBoardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
