import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTheSingleShoulderBagIcon],svg[icon-park-the-single-shoulder-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 27C28 18.1813 26.7806 4 24 4C20.5714 4 20 18.1813 20 27"></svg:path><svg:rect width="18" height="17" x="15" y="27"></svg:rect><svg:path fill="#2F88FF" d="M15 27H33L27.7059 36H19.7647L15 27Z"></svg:path></svg:g>`,
})
export class IconParkTheSingleShoulderBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
