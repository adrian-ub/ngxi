import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWavesLeftIcon],svg[icon-park-waves-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M24 17V31"></svg:path><svg:path d="M33 11V37"></svg:path><svg:path d="M6 17V31"></svg:path><svg:path d="M42 18V30"></svg:path><svg:path d="M15 4V44"></svg:path></svg:g>`,
})
export class IconParkWavesLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
