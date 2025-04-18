import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPaperShipIcon],svg[icon-park-paper-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" d="M4 24L12.5714 42L24 29L4 24Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M44 24L35.4286 42L24 29L44 24Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M13 42L35 42L24 29L13 42Z"></svg:path><svg:path d="M12 26L24 4L36 26"></svg:path></svg:g>`,
})
export class IconParkPaperShipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
