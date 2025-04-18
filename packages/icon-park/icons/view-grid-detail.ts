import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkViewGridDetailIcon],svg[icon-park-view-grid-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="8" height="8" x="13" y="13" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M27 13L35 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 20L35 20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 28L35 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 35H35"></svg:path></svg:g>`,
})
export class IconParkViewGridDetailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
