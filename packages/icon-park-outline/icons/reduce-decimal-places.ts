import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineReduceDecimalPlacesIcon],svg[icon-park-outline-reduce-decimal-places-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M27 9a5 5 0 0 0-10 0v10a5 5 0 0 0 10 0z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m25 32l-6 6l6 6"></svg:path><svg:path stroke-linecap="round" d="M8 24h1"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 38H19"></svg:path></svg:g>`,
})
export class IconParkOutlineReduceDecimalPlacesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
