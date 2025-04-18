import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFirstAidKitIcon],svg[icon-park-outline-first-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 20v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20M5 14h38v6H5zm26-6H17v6h14z"></svg:path><svg:path stroke-linecap="round" d="M20 30h8m-4-4v8"></svg:path></svg:g>`,
})
export class IconParkOutlineFirstAidKitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
