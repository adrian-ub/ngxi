import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListViewIcon],svg[icon-park-list-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="6" rx="3"></svg:rect><svg:path d="M4 14H44"></svg:path><svg:path d="M20 24H36"></svg:path><svg:path d="M20 32H36"></svg:path><svg:path d="M12 24H14"></svg:path><svg:path d="M12 32H14"></svg:path></svg:g>`,
})
export class IconParkListViewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
