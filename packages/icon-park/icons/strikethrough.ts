import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStrikethroughIcon],svg[icon-park-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 24H43"></svg:path><svg:path d="M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36"></svg:path><svg:path d="M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18"></svg:path><svg:path d="M12 36C12 36 15.9999 44 24 44C32 44 36.564 36.4005 32.3903 30"></svg:path></svg:g>`,
})
export class IconParkStrikethroughIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
