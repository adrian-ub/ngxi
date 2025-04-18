import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGameTwoIcon],svg[icon-park-outline-game-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m20 15l4 4l4-4V4h-8zm0 18l4-4l4 4v11h-8zm13-5l-4-4l4-4h11v8zm-18-8l4 4l-4 4H4v-8z"></svg:path>`,
})
export class IconParkOutlineGameTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
