import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCinemaIcon],svg[openmoji-cinema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="50" height="50" x="11" y="10.958" fill="#92d3f5" rx="1.921"></svg:rect><svg:path fill="#fff" d="m43.96 46.28l7.63 6.22a1.09 1.09 0 0 0 1.778-.844v-18.18a1.09 1.09 0 0 0-1.778-.844l-7.84 6.39"></svg:path><svg:path fill="#fff" d="M41.773 52.486H20.82a2.19 2.19 0 0 1-2.187-2.188V34.833a2.19 2.19 0 0 1 2.187-2.188h20.953a2.19 2.19 0 0 1 2.187 2.188v15.465a2.19 2.19 0 0 1-2.187 2.188"></svg:path><svg:circle cx="23.647" cy="24.253" r="5" fill="#fff"></svg:circle><svg:circle cx="38.749" cy="24.253" r="5" fill="#fff"></svg:circle><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m43.96 46.28l7.63 6.22a1.09 1.09 0 0 0 1.778-.844v-18.18a1.09 1.09 0 0 0-1.778-.844l-7.63 6.18"></svg:path><svg:circle cx="23.647" cy="24.253" r="5" stroke-linejoin="round"></svg:circle><svg:circle cx="38.749" cy="24.253" r="5" stroke-linejoin="round"></svg:circle><svg:path stroke-linejoin="round" d="M41.773 52.486H20.82a2.19 2.19 0 0 1-2.187-2.188V34.833a2.19 2.19 0 0 1 2.187-2.188h20.953a2.19 2.19 0 0 1 2.187 2.188v15.465a2.19 2.19 0 0 1-2.187 2.188Z"></svg:path><svg:rect width="50" height="50" x="11" y="10.958" stroke-miterlimit="10" rx="1.921"></svg:rect></svg:g>`,
})
export class OpenmojiCinemaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
