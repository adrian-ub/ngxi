import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNoShootingIcon],svg[icon-park-outline-no-shooting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="m15 12l3-6h12l3 6zm26 0H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m28 20l-8 14"></svg:path><svg:circle cx="24" cy="27" r="8" stroke-linecap="round"></svg:circle></svg:g>`,
})
export class IconParkOutlineNoShootingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
