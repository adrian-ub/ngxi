import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRadioactiveIcon],svg[openmoji-radioactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#f4aa41"></svg:circle><svg:g stroke="#000"><svg:circle cx="35.96" cy="35.89" r="3.281" stroke-miterlimit="10" stroke-width="1.25"></svg:circle><svg:path stroke-miterlimit="10" stroke-width="1.254" d="M23.09 28.58a14.8 14.8 0 0 1 3.496-4.097l5.791 6.957a5.73 5.73 0 0 0-2.167 3.753l-8.921-1.537a14.8 14.8 0 0 1 1.8-5.076zm25.82 0a14.8 14.8 0 0 1 1.8 5.076l-8.921 1.537a5.73 5.73 0 0 0-2.167-3.753l5.791-6.957a14.8 14.8 0 0 1 3.496 4.097zM36 50.87a14.8 14.8 0 0 1-5.296-.98l3.129-8.493a5.73 5.73 0 0 0 4.333 0l3.129 8.494a14.8 14.8 0 0 1-5.296.979z"></svg:path><svg:circle cx="36" cy="36" r="23" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle></svg:g>`,
})
export class OpenmojiRadioactiveIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
