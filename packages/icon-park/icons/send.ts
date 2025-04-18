import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSendIcon],svg[icon-park-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z"></svg:path><svg:path stroke-linecap="round" d="M43.0001 5L22.1001 25.9"></svg:path></svg:g>`,
})
export class IconParkSendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
