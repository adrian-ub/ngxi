import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFireAIcon],svg[mage-fire-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.21 14.434c0 6.328 5.843 6.816 7.79 6.816s7.79-.488 7.79-6.816c0-2.869-2.819-3.772-3.895-7.79c-6.816 7.79-5.842-3.894-5.842-3.894S4.21 8.592 4.21 14.434"></svg:path><svg:path d="M8.02 13.694c-.422 2.17 1.345 3.862 3.024 4.189"></svg:path></svg:g>`,
})
export class MageFireAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
