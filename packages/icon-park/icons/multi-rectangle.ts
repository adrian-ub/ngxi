import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiRectangleIcon],svg[icon-park-multi-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 39H44V7H12V15"></svg:path><svg:path d="M8 39H32V15H8V23"></svg:path><svg:path fill="#2F88FF" d="M20 23H4V39H20V23Z"></svg:path></svg:g>`,
})
export class IconParkMultiRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
