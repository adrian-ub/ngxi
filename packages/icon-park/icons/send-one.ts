import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSendOneIcon],svg[icon-park-send-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 6L4 20.1383L24 24.0083L29.0052 44L42 6Z"></svg:path><svg:path stroke-linecap="round" d="M24.0083 24.0084L29.6651 18.3516"></svg:path></svg:g>`,
})
export class IconParkSendOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
