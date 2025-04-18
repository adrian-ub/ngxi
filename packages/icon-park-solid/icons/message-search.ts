import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMessageSearchIcon],svg[icon-park-solid-message-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25.5 37H21l-10 5v-5H4V7h40v11"></svg:path><svg:circle cx="34" cy="28" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m39 32l5 4M12 15h6m-6 6h12"></svg:path></svg:g>`,
})
export class IconParkSolidMessageSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
