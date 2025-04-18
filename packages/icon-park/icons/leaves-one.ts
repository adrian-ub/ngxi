import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLeavesOneIcon],svg[icon-park-leaves-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M37 23.8788C37 30.5731 31.1797 36 24 36C16.8203 36 11 30.5731 11 23.8788C11 17.1844 24 4 24 4C24 4 37 17.1844 37 23.8788Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 4V36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 36V44"></svg:path><svg:path stroke="#000" d="M37 23.8789C37 30.5733 31.1797 36.0001 24 36.0001C16.8203 36.0001 11 30.5733 11 23.8789"></svg:path><svg:path stroke="#000" d="M37 23.8788C37 17.1844 24 4 24 4C24 4 11 17.1844 11 23.8788"></svg:path></svg:g>`,
})
export class IconParkLeavesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
