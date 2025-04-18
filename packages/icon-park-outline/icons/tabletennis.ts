import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTabletennisIcon],svg[icon-park-outline-tabletennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-miterlimit="2" stroke-width="4" d="M31.45 16.96a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m36 34l-2-11l-11 5l-13-3M4 41.03h40"></svg:path><svg:circle cx="9" cy="25" r="5" fill="currentColor"></svg:circle><svg:circle cx="6" cy="17" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m34 23l10 6l-15 5"></svg:path></svg:g>`,
})
export class IconParkOutlineTabletennisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
