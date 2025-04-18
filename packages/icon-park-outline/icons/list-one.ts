import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineListOneIcon],svg[icon-park-outline-list-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 6h16v6H18zm0 15h20v6H18zm0 15h26v6H18z"></svg:path><svg:circle cx="8" cy="9" r="2"></svg:circle><svg:circle cx="8" cy="24" r="2"></svg:circle><svg:circle cx="8" cy="39" r="2"></svg:circle></svg:g>`,
})
export class IconParkOutlineListOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
