import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkToLeftIcon],svg[icon-park-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 23.9917H42"></svg:path><svg:path d="M26 36L14 24L26 12"></svg:path><svg:path d="M5 36V12"></svg:path></svg:g>`,
})
export class IconParkToLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
