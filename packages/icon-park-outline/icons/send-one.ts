import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSendOneIcon],svg[icon-park-outline-send-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 6L4 20.138l20 3.87L29.005 44z"></svg:path><svg:path stroke-linecap="round" d="m24.008 24.008l5.657-5.656"></svg:path></svg:g>`,
})
export class IconParkOutlineSendOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
