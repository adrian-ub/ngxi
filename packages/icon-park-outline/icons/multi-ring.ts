import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMultiRingIcon],svg[icon-park-outline-multi-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 10a6 6 0 0 0-12 0v14a6 6 0 0 0 12 0z"></svg:path><svg:path d="M38.142 18.343a6 6 0 0 0-8.485-8.485l-9.9 9.9a6 6 0 1 0 8.486 8.485z"></svg:path><svg:path d="M38 30a6 6 0 0 0 0-12H24a6 6 0 0 0 0 12z"></svg:path><svg:path d="M29.657 38.142a6 6 0 1 0 8.485-8.485l-9.9-9.9a6 6 0 1 0-8.485 8.486z"></svg:path><svg:path d="M18 38a6 6 0 0 0 12 0V24a6 6 0 0 0-12 0z"></svg:path><svg:path d="M9.858 29.657a6 6 0 1 0 8.485 8.485l9.9-9.9a6 6 0 1 0-8.486-8.485z"></svg:path><svg:path d="M10 18a6 6 0 0 0 0 12h14a6 6 0 0 0 0-12z"></svg:path><svg:path d="M18.343 9.858a6 6 0 0 0-8.485 8.485l9.9 9.9a6 6 0 1 0 8.485-8.485z"></svg:path></svg:g>`,
})
export class IconParkOutlineMultiRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
