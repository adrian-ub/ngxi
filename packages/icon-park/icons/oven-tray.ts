import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOvenTrayIcon],svg[icon-park-oven-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" rx="2"></svg:rect><svg:path d="M4 16H44"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M4 32H44"></svg:path></svg:g>`,
})
export class IconParkOvenTrayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
