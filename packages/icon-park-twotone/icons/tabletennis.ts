import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTabletennisIcon],svg[icon-park-twotone-tabletennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTabletennis0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-miterlimit="2" stroke-width="4" d="M31.45 16.96a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m36 34l-2-11l-11 5l-13-3M4 41.03h40"></svg:path><svg:circle cx="9" cy="25" r="5" fill="#fff"></svg:circle><svg:circle cx="6" cy="17" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m34 23l10 6l-15 5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTabletennis0)"></svg:path>`,
})
export class IconParkTwotoneTabletennisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
