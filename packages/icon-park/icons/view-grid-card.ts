import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkViewGridCardIcon],svg[icon-park-view-grid-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="8" height="8" x="13" y="13" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="27" y="13" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="13" y="27" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="27" y="27" fill="#43CCF8" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkViewGridCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
