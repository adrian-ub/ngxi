import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWarningIcon],svg[openmoji-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#fcea2b" d="M32.522 13.005c.698-1.205 1.986-2.024 3.478-2.024s2.78.82 3.478 2.024L60.446 54.94A4 4 0 0 1 61 56.948a4.03 4.03 0 0 1-4.032 4.033l-41.936.017A4.033 4.033 0 0 1 11 56.966c0-.736.211-1.415.554-2.009z"></svg:path><svg:path fill="#FFF" d="M37.613 47.27a1.613 1.613 0 0 1-3.226 0V23.893a1.613 1.613 0 0 1 3.226 0z"></svg:path><svg:circle cx="36" cy="54.529" r="1.613" fill="#FFF"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M32.522 13.005c.698-1.205 1.986-2.024 3.478-2.024s2.78.82 3.478 2.024L60.446 54.94A4 4 0 0 1 61 56.948a4.03 4.03 0 0 1-4.032 4.033l-41.936.017A4.033 4.033 0 0 1 11 56.966c0-.736.211-1.415.554-2.009z"></svg:path><svg:path d="M37.613 47.27a1.613 1.613 0 0 1-3.226 0V23.893a1.613 1.613 0 0 1 3.226 0z"></svg:path><svg:circle cx="36" cy="54.529" r="1.613"></svg:circle></svg:g>`,
})
export class OpenmojiWarningIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
