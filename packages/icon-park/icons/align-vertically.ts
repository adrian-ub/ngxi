import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignVerticallyIcon],svg[icon-park-align-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="34" x="17" y="7" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M42 24H6"></svg:path></svg:g>`,
})
export class IconParkAlignVerticallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
