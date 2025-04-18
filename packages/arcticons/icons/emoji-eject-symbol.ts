import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiEjectSymbolIcon],svg[arcticons-emoji-eject-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.247 34.825c.148-.4.246-.85.246-1.301c0-.7-.246-1.401-.638-2.002L26.645 6.751L26.4 6.5c-.638-.65-1.424-1.001-2.308-1.001s-1.718.35-2.308 1l-.245.25L8.23 31.523c-.688.901-.835 2.202-.393 3.303c.491 1.251 1.719 2.052 3.044 2.052H37.2c1.326 0 2.553-.8 3.044-2.052zM7.507 42.5h32.908"></svg:path>`,
})
export class ArcticonsEmojiEjectSymbolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
