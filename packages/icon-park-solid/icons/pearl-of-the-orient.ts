import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPearlOfTheOrientIcon],svg[icon-park-solid-pearl-of-the-orient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="33" r="6" fill="currentColor"></svg:circle><svg:circle cx="24" cy="13" r="3" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" d="M24 40v4m-2-28l-2 12m6-12l2 12m-9 9l-3 7m13-7l3 7M24 4v6"></svg:path></svg:g>`,
})
export class IconParkSolidPearlOfTheOrientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
