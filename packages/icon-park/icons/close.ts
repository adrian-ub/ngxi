import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCloseIcon],svg[icon-park-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 8L40 40"></svg:path><svg:path d="M8 40L40 8"></svg:path></svg:g>`,
})
export class IconParkCloseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
