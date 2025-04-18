import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEnterKeyOneIcon],svg[icon-park-enter-key-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23 23V5H43V43H5V23H23Z"></svg:path><svg:path stroke="#fff" d="M33 13V33H13"></svg:path><svg:path stroke="#fff" d="M17 29L13 33L17 37"></svg:path></svg:g>`,
})
export class IconParkEnterKeyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
