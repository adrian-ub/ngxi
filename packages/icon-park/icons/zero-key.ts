import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkZeroKeyIcon],svg[icon-park-zero-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke="#000" rx="3"></svg:rect><svg:rect width="10" height="20" x="19" y="14" stroke="#fff" rx="5"></svg:rect></svg:g>`,
})
export class IconParkZeroKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
