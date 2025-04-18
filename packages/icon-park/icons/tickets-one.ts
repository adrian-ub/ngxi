import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketsOneIcon],svg[icon-park-tickets-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="26" height="38" x="5" y="42" fill="#2F88FF" stroke="#000" stroke-linejoin="bevel" stroke-width="4" rx="2" transform="rotate(-90 5 42)"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9.00002 16L32 4.99999L37 16"></svg:path><svg:circle cx="13" cy="23" r="2" fill="#fff"></svg:circle><svg:circle cx="13" cy="29" r="2" fill="#fff"></svg:circle><svg:circle cx="13" cy="35" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 35H25L36 23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 29H30"></svg:path></svg:g>`,
})
export class IconParkTicketsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
