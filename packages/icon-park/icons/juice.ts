import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkJuiceIcon],svg[icon-park-juice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M15 24H33L31.2 44H16.8L15 24Z"></svg:path><svg:rect width="26" height="6" x="11" y="18" rx="3"></svg:rect><svg:path fill="#2F88FF" d="M24 8C18.4772 8 14 12.4772 14 18H34C34 12.4772 29.5228 8 24 8Z"></svg:path><svg:path stroke-linecap="round" d="M28 4L26 8"></svg:path></svg:g>`,
})
export class IconParkJuiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
