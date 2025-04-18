import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineJumpIcon],svg[icon-park-outline-jump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 10l12 10.254v9.714L10.857 44M40 10L28 20.254v9.714L37.143 44"></svg:path><svg:circle cx="24" cy="8" r="4"></svg:circle></svg:g>`,
})
export class IconParkOutlineJumpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
