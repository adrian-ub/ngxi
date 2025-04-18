import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSendToBackIcon],svg[icon-park-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 21H5V5H21V14"></svg:path><svg:path stroke-linecap="round" d="M32 27H43V43H27V32"></svg:path><svg:path fill="#2F88FF" d="M14 32V14H32V32H14Z"></svg:path></svg:g>`,
})
export class IconParkSendToBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
