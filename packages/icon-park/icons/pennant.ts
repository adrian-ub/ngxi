import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPennantIcon],svg[icon-park-pennant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 44H16M12 6V4V6ZM12 22V44V22ZM12 44H8H12Z"></svg:path><svg:path d="M8 44H12H16"></svg:path><svg:path fill="#2F88FF" d="M12 6V22L40 14L12 6Z"></svg:path></svg:g>`,
})
export class IconParkPennantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
