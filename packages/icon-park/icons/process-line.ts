import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkProcessLineIcon],svg[icon-park-process-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 40H14"></svg:path><svg:path d="M4 32H24"></svg:path><svg:path d="M22 40H27"></svg:path><svg:path d="M37 40H44"></svg:path><svg:path d="M35 32H44"></svg:path><svg:path d="M32 24H44"></svg:path><svg:path d="M16 24H22"></svg:path><svg:path d="M4 24H6"></svg:path><svg:path d="M4 16H8"></svg:path><svg:path d="M4 8H11L19 16H44"></svg:path><svg:path d="M22 8H44"></svg:path></svg:g>`,
})
export class IconParkProcessLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
