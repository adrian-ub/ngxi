import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBuyIcon],svg[icon-park-outline-buy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 15h36l-2 27H8z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 19V6h16v13"></svg:path><svg:path stroke-linecap="round" d="M16 34h16"></svg:path></svg:g>`,
})
export class IconParkOutlineBuyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
