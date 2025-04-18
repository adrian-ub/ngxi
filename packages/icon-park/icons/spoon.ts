import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSpoonIcon],svg[icon-park-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="20" x="14" y="4" fill="#2F88FF" rx="10"></svg:rect><svg:path d="M24 24L24 36"></svg:path><svg:rect width="6" height="8" x="21" y="36" fill="#2F88FF" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSpoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
