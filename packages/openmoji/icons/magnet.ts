import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMagnetIcon],svg[openmoji-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiMagnet0" d="M20.5 31.5h6v5h-6zm23 0h6v5h-6z"></svg:path></svg:defs><svg:path fill="#ea5a47" d="M43.5 36.5V47a8.5 8.5 0 0 1-17 0V36.5h-6V47a14.5 14.5 0 0 0 29 0V36.5Z"></svg:path><svg:use href="#openmojiMagnet0" fill="#d0cfce"></svg:use><svg:path fill="#fcea2b" d="M44.882 19.775a1.28 1.28 0 0 0-1.26-.907h-4.925l3.461-7.75a1 1 0 0 0-1.645-1.089L29.42 21.958a1.33 1.33 0 0 0-.278 1.451a1.37 1.37 0 0 0 1.266.85h4.88l-4.996 8.05a1 1 0 0 0 .213 1.299c.227.188.38.315.572.315c.4 0 .966-.557 2.716-2.279L44.21 21.371a1.45 1.45 0 0 0 .672-1.596"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.5V47a8.5 8.5 0 0 1-17 0V36.5h-6V47a14.5 14.5 0 0 0 29 0V36.5Z"></svg:path><svg:use href="#openmojiMagnet0" stroke-linecap="round" stroke-linejoin="round"></svg:use><svg:path stroke-miterlimit="10" d="M44.882 19.775a1.28 1.28 0 0 0-1.26-.907h-4.925l3.461-7.75a1 1 0 0 0-1.645-1.089L29.42 21.958a1.33 1.33 0 0 0-.278 1.451a1.37 1.37 0 0 0 1.266.85h4.88l-4.996 8.05a1 1 0 0 0 .213 1.299c.227.188.38.315.572.315c.4 0 .966-.557 2.716-2.279L44.21 21.371a1.45 1.45 0 0 0 .672-1.596Z"></svg:path></svg:g>`,
})
export class OpenmojiMagnetIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
