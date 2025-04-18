import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGamePsIcon],svg[icon-park-game-ps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 28H28V44H44V28Z"></svg:path><svg:path fill="#2F88FF" d="M13 4L22 20H4L13 4Z"></svg:path><svg:path fill="#2F88FF" d="M36 20C40.4183 20 44 16.4183 44 12C44 7.58172 40.4183 4 36 4C31.5817 4 28 7.58172 28 12C28 16.4183 31.5817 20 36 20Z"></svg:path><svg:path stroke-linecap="round" d="M4 28L20 44"></svg:path><svg:path stroke-linecap="round" d="M20 28L4 44"></svg:path></svg:g>`,
})
export class IconParkGamePsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
