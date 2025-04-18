import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEditIcon],svg[icon-park-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M7 42H43"></svg:path><svg:path fill="#2F88FF" d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z"></svg:path></svg:g>`,
})
export class IconParkEditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
