import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketsTwoIcon],svg[icon-park-tickets-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 30C33 30 35 31.8809 35 34L41 34L41 4L35 4C35 6 33 8 30 8C27 8 25 6 25 4L19 4L19 18"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44L24 44C24 41.8809 22 40 19 40C16 40 14 41.8809 14 44L8 44L8 14L14 14C14 16 16 18 19 18C22 18 24 16 24 14L30 14L30 44Z"></svg:path><svg:circle cx="14" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="19" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkTicketsTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
