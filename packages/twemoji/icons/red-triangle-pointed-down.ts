import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRedTrianglePointedDownIcon],svg[twemoji-red-triangle-pointed-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E75A70" d="M19.146 26.361c-.63.901-1.637.884-2.236-.038L6.09 9.677C5.491 8.754 5.9 8 7 8h23c1.1 0 1.483.737.854 1.639z"></svg:path>`,
})
export class TwemojiRedTrianglePointedDownIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
