import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAmbulanceIcon],svg[twemoji-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M35 12c0-1-1-4-4-4H9.401c-1.377 0-3.29 1.791-4.302 4L2 17c-1.453.599-2 2.331-2 4v6a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-8c0-1.027-1-7-1-7"></svg:path><svg:path fill="#E1E8ED" d="M9 25a5.997 5.997 0 0 0-5.993 5.861c.32.081.648.139.993.139h11a6 6 0 0 0-6-6m23.993 5.86A5.996 5.996 0 0 0 27 25c-3.312 0-6 2.687-6 6h11c.345 0 .674-.058.993-.14"></svg:path><svg:circle cx="9" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="9" cy="31" r="2" fill="#99AAB5"></svg:circle><svg:circle cx="27" cy="31" r="4" fill="#292F33"></svg:circle><svg:circle cx="27" cy="31" r="2" fill="#99AAB5"></svg:circle><svg:path fill="#DD2E44" d="M0 21h36v3H0zm31-8h-3v-3h-2v3h-3v2h3v3h2v-3h3z"></svg:path><svg:path fill="#55ACEE" d="M8 10h5v7H4z"></svg:path><svg:path fill="#DD2E44" d="M15 6.5A1.5 1.5 0 0 1 13.5 8h-2a1.5 1.5 0 1 1 0-3h2A1.5 1.5 0 0 1 15 6.5"></svg:path><svg:path fill="#55ACEE" d="M18 6.5A1.5 1.5 0 0 1 16.5 8h-2a1.5 1.5 0 1 1 0-3h2A1.5 1.5 0 0 1 18 6.5"></svg:path>`,
})
export class TwemojiAmbulanceIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
