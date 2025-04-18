import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChurchTwoIcon],svg[icon-park-church-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M13 24L24 14L35 24V44H13V24Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M7 8L10 4L13 8V44H7V8Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M35 8L38 4L41 8V44H35V8Z"></svg:path><svg:path stroke="#fff" d="M24 25V35"></svg:path><svg:path stroke="#fff" d="M20 29L28 29"></svg:path></svg:g>`,
})
export class IconParkChurchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
