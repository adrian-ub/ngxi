import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkApplicationOneIcon],svg[icon-park-application-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M41 13.9997L24 4L7 13.9997V33.9998L24 44L41 33.9998V13.9997Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 18.9976L23.9932 24.0002L31.9951 18.9976"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V33"></svg:path></svg:g>`,
})
export class IconParkApplicationOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
