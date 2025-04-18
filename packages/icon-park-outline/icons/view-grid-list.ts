import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineViewGridListIcon],svg[icon-park-outline-view-grid-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path d="M13 13h8v8h-8zm0 14h8v8h-8z"></svg:path><svg:path stroke-linecap="round" d="M27 28h8m-8 7h8m-8-22h8m-8 7h8"></svg:path></svg:g>`,
})
export class IconParkOutlineViewGridListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
