import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFoundationMakeupIcon],svg[icon-park-solid-foundation-makeup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M13 19a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v19s0 6-6 6h-8c-6 0-6-6-6-6z"></svg:path><svg:path d="M18 12h10v5H18zm0 0V9c0-3 3-5 6-5h11s-7 2-7 6v2"></svg:path></svg:g>`,
})
export class IconParkSolidFoundationMakeupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
