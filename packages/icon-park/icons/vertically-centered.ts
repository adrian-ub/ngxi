import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVerticallyCenteredIcon],svg[icon-park-vertically-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M6 7H42"></svg:path><svg:rect width="16" height="16" x="16" y="16" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:path d="M6 41H42"></svg:path></svg:g>`,
})
export class IconParkVerticallyCenteredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
