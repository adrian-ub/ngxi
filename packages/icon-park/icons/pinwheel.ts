import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPinwheelIcon],svg[icon-park-pinwheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 4V21H11L21 4Z"></svg:path><svg:path d="M27 44V27H37L27 44Z"></svg:path><svg:path d="M27 11L44 21H27V11Z"></svg:path><svg:path d="M21 37L4 27H21V37Z"></svg:path></svg:g>`,
})
export class IconParkPinwheelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
