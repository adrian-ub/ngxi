import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkConesIcon],svg[icon-park-cones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 8L4 40H44L24 8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 32L24 28L18 32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V22"></svg:path></svg:g>`,
})
export class IconParkConesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
