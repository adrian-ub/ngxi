import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSpellCheckIcon],svg[icomoon-free-spell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h2v3h1V1c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v6h1zm0-3h2v2H2zm13 0V0h-3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h3V6h-3V1zm-5 1.5V1c0-.55-.45-1-1-1H6v7h3c.55 0 1-.45 1-1V4.5c0-.55-.137-1-.688-1c.55 0 .688-.45.688-1M9 6H7V4h2zm0-3H7V1h2zm4 6l-6.5 7L3 11.5l1.281-1.094L6.5 12.719L12 8z"></svg:path>`,
})
export class IcomoonFreeSpellCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
