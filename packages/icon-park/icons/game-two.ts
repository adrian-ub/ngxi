import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGameTwoIcon],svg[icon-park-game-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 15L24 19L28 15V4H20V15Z"></svg:path><svg:path d="M20 33L24 29L28 33V44H20V33Z"></svg:path><svg:path d="M33 28L29 24L33 20L44 20L44 28L33 28Z"></svg:path><svg:path d="M15 20L19 24L15 28L4 28L4 20L15 20Z"></svg:path></svg:g>`,
})
export class IconParkGameTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
