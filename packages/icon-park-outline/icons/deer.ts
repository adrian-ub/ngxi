import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDeerIcon],svg[icon-park-outline-deer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M36 27c0 7.217-5.373 17-12 17s-12-9.783-12-17c0-7.216 1.5-11 12-11s12 3.784 12 11Z"></svg:path><svg:ellipse stroke="currentColor" stroke-width="4" rx="5" ry="3.5" transform="scale(1 -1)rotate(45 40.625 38.327)"></svg:ellipse><svg:ellipse cx="9" cy="17.5" stroke="currentColor" stroke-width="4" rx="5" ry="3.5" transform="rotate(45 9 17.5)"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M12 4c0 6.627 5.373 12 12 12s12-5.373 12-12"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M18 7c0 4.97 2.686 9 6 9s6-4.03 6-9"></svg:path><svg:circle cx="20" cy="26" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="34" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="26" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineDeerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
