import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSTurnDownIcon],svg[icon-park-outline-s-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 17v-4c0-4 3-7 7-7s7 3 7 7v19M10 6v29c0 4 3 7 7 7s7-3 7-7V17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 11l-5-5l-5 5"></svg:path><svg:circle cx="38" cy="37" r="5"></svg:circle></svg:g>`,
})
export class IconParkOutlineSTurnDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
