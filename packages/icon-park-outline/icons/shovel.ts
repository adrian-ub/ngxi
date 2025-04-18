import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShovelIcon],svg[icon-park-outline-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 4h22l-1 9l-8.5 6h-3L14 13zm11 15v11"></svg:path><svg:rect width="6" height="14" x="21" y="30" rx="3"></svg:rect></svg:g>`,
})
export class IconParkOutlineShovelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
