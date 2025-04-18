import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineListViewIcon],svg[icon-park-outline-list-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="6" rx="3"></svg:rect><svg:path d="M4 14h40M20 24h16m-16 8h16m-24-8h2m-2 8h2"></svg:path></svg:g>`,
})
export class IconParkOutlineListViewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
