import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDiapersOneIcon],svg[icon-park-diapers-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 6H6V24C6 28.5 8.5 42.5 24 42.5C39.5 42.5 42 28 42 24V6Z"></svg:path><svg:path d="M6 14H16"></svg:path><svg:path d="M32 14H42"></svg:path><svg:path d="M42 24C32 24 25 28.8 25 42"></svg:path><svg:path d="M6 24C16 24 23 28.8 23 42"></svg:path></svg:g>`,
})
export class IconParkDiapersOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
