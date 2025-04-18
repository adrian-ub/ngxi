import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMoonFoggyLineIcon],svg[ri-moon-foggy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20.335v-2.2a7.52 7.52 0 0 0 3.623-4.281a9 9 0 0 1-10.622-8.99A7.52 7.52 0 0 0 5.151 10H3.117a9.505 9.505 0 0 1 8.538-7.963a7 7 0 0 0 10.316 8.728q.027.364.028.735c0 4.01-2.485 7.44-6 8.834M7 20h7v2H7zm-3-8h6v2H4zm-2 4h10v2H2z"></svg:path>`,
})
export class RiMoonFoggyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
