import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFourPointConnectionIcon],svg[icon-park-four-point-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 28V40H20"></svg:path><svg:path d="M28 40H40V28"></svg:path><svg:path d="M40 20V8H28"></svg:path><svg:path d="M20 8H8V20"></svg:path><svg:path fill="#2F88FF" d="M44 20H36V28H44V20Z"></svg:path><svg:path fill="#2F88FF" d="M12 20H4V28H12V20Z"></svg:path><svg:path fill="#2F88FF" d="M28 36H20V44H28V36Z"></svg:path><svg:path fill="#2F88FF" d="M28 4H20V12H28V4Z"></svg:path><svg:path d="M24 18V30"></svg:path><svg:path d="M18 24H30"></svg:path><svg:path d="M28 8L40 20"></svg:path><svg:path d="M20 8L8 20"></svg:path><svg:path d="M20 40L8 28"></svg:path><svg:path d="M40 28L29 40"></svg:path></svg:g>`,
})
export class IconParkFourPointConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
