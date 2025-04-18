import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkJumpIcon],svg[icon-park-jump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10L20 20.254V29.9683L10.8571 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 10L28 20.254V29.9683L37.1429 44"></svg:path><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkJumpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
