import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkForkSpoonIcon],svg[icon-park-fork-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 4V44"></svg:path><svg:path d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"></svg:path><svg:path d="M34 20V44"></svg:path><svg:path fill="#2F88FF" d="M40 12C40 16.4183 37.3137 20 34 20C30.6863 20 28 16.4183 28 12C28 7.58172 30.6863 4 34 4C37.3137 4 40 7.58172 40 12Z"></svg:path></svg:g>`,
})
export class IconParkForkSpoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
