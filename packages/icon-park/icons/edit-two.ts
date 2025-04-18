import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEditTwoIcon],svg[icon-park-edit-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"></svg:path><svg:path fill="#2F88FF" d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z"></svg:path></svg:g>`,
})
export class IconParkEditTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
