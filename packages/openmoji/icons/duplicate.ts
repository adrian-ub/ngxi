import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDuplicateIcon],svg[openmoji-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M12.802 24.086h34.882V59.03H12.802z"></svg:path><svg:path fill="#FFF" d="M24.894 12.081h34.901v34.786H24.894z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M46.802 51.984v7.013c0 .55-.45 1-1 1h-33c-.55 0-1-.45-1-1v-33a1 1 0 0 1 1-1h7.081"></svg:path><svg:path d="M58.802 46.997h-33c-.55 0-1-.45-1-1v-33a1 1 0 0 1 1-1h33c.55 0 1 .45 1 1v33c0 .55-.45 1-1 1"></svg:path></svg:g>`,
})
export class OpenmojiDuplicateIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
