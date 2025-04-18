import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMarkIcon],svg[icon-park-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M11 6V42"></svg:path><svg:path fill="#2F88FF" d="M11 9H25L32 12H39C40.1046 12 41 12.8954 41 14V31C41 32.1046 40.1046 33 39 33H32L25 30H11V9Z"></svg:path><svg:path stroke-linecap="round" d="M7 42H15"></svg:path></svg:g>`,
})
export class IconParkMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
