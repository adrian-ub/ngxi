import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHorizontallyCenteredIcon],svg[icon-park-horizontally-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="16" height="16" x="16" y="16" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:path d="M5 40L5 8"></svg:path><svg:path d="M43 40L43 8"></svg:path></svg:g>`,
})
export class IconParkHorizontallyCenteredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
