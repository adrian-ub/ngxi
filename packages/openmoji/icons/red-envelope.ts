import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRedEnvelopeIcon],svg[openmoji-red-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M17 5h38v62H17z"></svg:path><svg:circle cx="36" cy="27" r="10" fill="#f1b31c"></svg:circle><svg:g fill="none" stroke="#000"><svg:g stroke-linecap="round" stroke-linejoin="round"><svg:path d="M31.887 21.413v2.454m-1.963 0h3.85A12 12 0 0 1 29.7 28.85"></svg:path><svg:path d="M33.587 28.264a5.2 5.2 0 0 1-1.7-1.452v5.775m2.925-10.439H41.7m-5.72 1.692h4.488v2.01H35.98zm-.61 8.697v-4.922h5.796v4.922m-5.796-2.87h5.796m-5.796 2.049h5.796m-2.937 0v-4.101"></svg:path></svg:g><svg:g stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="27" r="10"></svg:circle><svg:path d="M55 18a25.4 25.4 0 0 1-9.289 6.652m-19.422 0A25.4 25.4 0 0 1 17 18"></svg:path></svg:g><svg:path stroke-linejoin="round" stroke-width="2" d="M17 5h38v62H17z"></svg:path></svg:g>`,
})
export class OpenmojiRedEnvelopeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
