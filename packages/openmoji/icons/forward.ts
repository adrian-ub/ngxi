import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiForwardIcon],svg[openmoji-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M46.815 33.428L55 25.214L46.815 17"></svg:path><svg:path d="M32.329 54.498c-8.087 0-14.642-6.556-14.642-14.642s6.555-14.642 14.642-14.642h21.73"></svg:path></svg:g>`,
})
export class OpenmojiForwardIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
