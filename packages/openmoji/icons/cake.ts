import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCakeIcon],svg[openmoji-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.5" cy="15" r="2" fill="#ea5a47"></svg:circle><svg:circle cx="33.5" cy="15" r="2" fill="#ea5a47"></svg:circle><svg:circle cx="36" cy="11" r="2" fill="#ea5a47"></svg:circle><svg:path fill="#FFF" d="M60 57a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3v-1h48z"></svg:path><svg:path fill="#fcea2b" d="M55.767 34.414L58 56H14l2.233-21.586L17 27c0-5.523 4.478-10 10-10h18c5.523 0 10 4.477 10 10z"></svg:path><svg:path fill="#a57939" d="M55.533 34.414a2.98 2.98 0 0 1-1.766.586a3 3 0 0 1-3-3v-2a3 3 0 1 0-6 0v2a3 3 0 0 1-6 0v-2a3 3 0 1 0-6 0v2a3 3 0 0 1-6 0v-2a3 3 0 1 0-6 0v2a3 3 0 0 1-3 3A2.98 2.98 0 0 1 16 34.414L16.767 27c0-5.523 4.477-10 10-10h18c5.522 0 10 4.477 10 10z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M60 57a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3v-1h48z"></svg:path><svg:circle cx="38.5" cy="15" r="2"></svg:circle><svg:circle cx="33.5" cy="15" r="2"></svg:circle><svg:circle cx="36" cy="11" r="2"></svg:circle><svg:path d="M16.233 34.414L17 27c0-5.523 4.478-10 10-10h18c5.523 0 10 4.477 10 10l.767 7.414m-39.534 0L14 56h44l-2.233-21.586"></svg:path><svg:path d="M16.233 34.414A2.98 2.98 0 0 0 18 35a3 3 0 0 0 3-3v-2a3 3 0 1 1 6 0v2a3 3 0 0 0 6 0v-2a3 3 0 1 1 6 0v2a3 3 0 0 0 6 0v-2a3 3 0 1 1 6 0v2a3 3 0 0 0 3 3a2.98 2.98 0 0 0 1.767-.586"></svg:path></svg:g>`,
})
export class OpenmojiCakeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
