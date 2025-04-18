import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTicketsOneIcon],svg[icon-park-outline-tickets-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="26" height="38" x="5" y="42" stroke="currentColor" stroke-linejoin="bevel" stroke-width="4" rx="2" transform="rotate(-90 5 42)"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 16L32 5l5 11"></svg:path><svg:circle cx="13" cy="23" r="2" fill="currentColor"></svg:circle><svg:circle cx="13" cy="29" r="2" fill="currentColor"></svg:circle><svg:circle cx="13" cy="35" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 35h4l11-12m-12 6h6"></svg:path></svg:g>`,
})
export class IconParkOutlineTicketsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
