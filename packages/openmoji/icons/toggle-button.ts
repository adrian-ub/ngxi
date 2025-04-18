import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiToggleButtonIcon],svg[openmoji-toggle-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#d0cfce" d="M51.098 45.98h-30.04c-5.512 0-9.98-4.469-9.98-9.98s4.468-9.98 9.98-9.98h30.04c5.512 0 9.98 4.468 9.98 9.98c0 5.511-4.468 9.98-9.98 9.98"></svg:path><svg:circle cx="20.923" cy="36" r="10.001" fill="#ea5a47"></svg:circle><svg:path fill="#ea5a47" d="M27.521 28.446c4.09 3.713 4.395 10.038.682 14.127s-10.038 4.394-14.127.681"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M51.098 45.98h-30.04c-5.512 0-9.98-4.469-9.98-9.98v0c0-5.512 4.468-9.98 9.98-9.98h30.04c5.512 0 9.98 4.468 9.98 9.98v0c0 5.511-4.468 9.98-9.98 9.98"></svg:path><svg:circle cx="20.923" cy="36" r="10.001"></svg:circle><svg:path d="M27.521 28.446c4.09 3.713 4.395 10.038.682 14.127s-10.038 4.394-14.127.681"></svg:path></svg:g>`,
})
export class OpenmojiToggleButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
