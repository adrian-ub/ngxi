import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKaabaIcon],svg[openmoji-kaaba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#3F3F3F" d="M16.5 16h39v39h-39z"></svg:path><svg:path fill="#F1B31C" d="M16.5 23h39v4h-39z"></svg:path><svg:path fill="#9B9B9A" d="M22.5 47h5v8h-5z"></svg:path><svg:path fill="#F1B31C" d="m36 31l-2 3.5l2 3.5l2-3.5z"></svg:path><svg:circle cx="25" cy="34.5" r="2.5" fill="#F1B31C"></svg:circle><svg:circle cx="46.5" cy="34.5" r="2.5" fill="#F1B31C"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M16.5 16h39v39h-39z"></svg:path><svg:path d="M16.5 23h39v4h-39zm6 24h5v8h-5zM36 31l-2 3.5l2 3.5l2-3.5z"></svg:path><svg:circle cx="25" cy="34.5" r="2.5"></svg:circle><svg:circle cx="46.5" cy="34.5" r="2.5"></svg:circle></svg:g>`,
})
export class OpenmojiKaabaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
