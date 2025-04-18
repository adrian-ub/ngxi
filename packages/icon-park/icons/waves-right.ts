import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWavesRightIcon],svg[icon-park-waves-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M24 11V37"></svg:path><svg:path d="M33 4V44"></svg:path><svg:path d="M6 11V37"></svg:path><svg:path d="M42 15V33"></svg:path><svg:path d="M15 18V30"></svg:path></svg:g>`,
})
export class IconParkWavesRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
