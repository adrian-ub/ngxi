import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSendToBackIcon],svg[icon-park-solid-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 21H5V5h16v9"></svg:path><svg:path stroke-linecap="round" d="M32 27h11v16H27V32"></svg:path><svg:path fill="currentColor" d="M14 32V14h18v18z"></svg:path></svg:g>`,
})
export class IconParkSolidSendToBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
