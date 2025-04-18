import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTShirtIcon],svg[icon-park-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9 9L18 4H30L39 9L43 24L35 30V44H13V30L5 24L9 9Z"></svg:path><svg:path d="M13 31L13 24"></svg:path><svg:path d="M35 31L35 24"></svg:path></svg:g>`,
})
export class IconParkTShirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
