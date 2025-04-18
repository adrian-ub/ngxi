import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShovelIcon],svg[icon-park-solid-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M13 4h22l-1 9l-8.5 6h-3L14 13z"></svg:path><svg:path d="M24 19v11"></svg:path><svg:rect width="6" height="14" x="21" y="30" fill="currentColor" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSolidShovelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
