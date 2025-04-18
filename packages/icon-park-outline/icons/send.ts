import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSendIcon],svg[icon-park-outline-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 5L29.7 43l-7.6-17.1L5 18.3z"></svg:path><svg:path stroke-linecap="round" d="M43 5L22.1 25.9"></svg:path></svg:g>`,
})
export class IconParkOutlineSendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
