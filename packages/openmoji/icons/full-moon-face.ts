import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFullMoonFaceIcon],svg[openmoji-full-moon-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#fcea2b" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="#f1b31c" d="M29 62c20.003 0 16.663-52 16.663-52s24.959 7 16.64 35S13.4 62 29 62" opacity=".4"></svg:path><svg:circle cx="26.5" cy="27.5" r="5" fill="#fff"></svg:circle><svg:circle cx="45.5" cy="27.5" r="5" fill="#fff"></svg:circle><svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width=".25" d="M34 37h4v2h-4z"></svg:path><svg:path fill="none" stroke-width="2" d="M36 64a28 28 0 0 1 0-56m0 0a28 28 0 0 1 0 56"></svg:path><svg:path fill="none" stroke-width="2" d="M36 39.5c1.105 0 2.5-.895 2.5-2H34a2 2 0 0 0 2 2m-9.08 6.42s3.705 3.389 9.652 3.771c6.942.314 10.42-3.695 10.42-3.695"></svg:path><svg:circle cx="26.5" cy="27.5" r="5" fill="none" stroke-width="2"></svg:circle><svg:circle cx="45.5" cy="27.5" r="5" fill="none" stroke-width="2"></svg:circle><svg:circle cx="45.5" cy="27.5" r="5" fill="none"></svg:circle><svg:circle cx="43.45" cy="27.75" r="1.75" stroke-width="2"></svg:circle><svg:circle cx="26.5" cy="27.5" r="5" fill="none"></svg:circle><svg:circle cx="24.25" cy="27.75" r="1.75" stroke-width="2"></svg:circle></svg:g>`,
})
export class OpenmojiFullMoonFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
