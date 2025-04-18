import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEmailSearchIcon],svg[icon-park-solid-email-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24V9H4v30h20"></svg:path><svg:circle cx="36" cy="34" r="5" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m40 37l4 3M4 9l20 15L44 9"></svg:path></svg:g>`,
})
export class IconParkSolidEmailSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
