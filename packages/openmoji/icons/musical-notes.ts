import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMusicalNotesIcon],svg[openmoji-musical-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3f3f3f"><svg:circle cx="15.205" cy="45.71" r="5.548"></svg:circle><svg:circle cx="29.446" cy="57.93" r="5.548"></svg:circle><svg:circle cx="46.139" cy="45.71" r="5.548"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="15.205" cy="45.71" r="5"></svg:circle><svg:circle cx="29.446" cy="57.93" r="5"></svg:circle><svg:circle cx="46.139" cy="45.71" r="5"></svg:circle><svg:path d="M56.729 17.155h-5.968l.378 28.555M40.036 29.375h-5.969l.379 28.555m-8.651-40.775h-5.969l.379 28.555"></svg:path></svg:g>`,
})
export class OpenmojiMusicalNotesIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
