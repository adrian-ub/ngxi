import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamTwoIcon],svg[icon-park-icecream-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M15.3396 22.5L21 37L24 43L27 37L32.6602 22.5"></svg:path><svg:path d="M19 32H29"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 3C18 3 16 9 16 9C16 9 10 11 10 16C10 21 15 23 15 23C15 23 18.5 21 24 21C29.5 21 33 23 33 23C33 23 38 21 38 16C38 11 32 9 32 9C32 9 30 3 24 3Z"></svg:path></svg:g>`,
})
export class IconParkIcecreamTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
