import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOrthodoxCrossIcon],svg[openmoji-orthodox-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v47.83H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="3" d="M36 53V19m11 9.5H25m15.54-5.76h-9.08m9.28 26.89l-9.48-3.59"></svg:path><svg:path stroke-width="2" d="M12 12h48v48H12z"></svg:path></svg:g>`,
})
export class OpenmojiOrthodoxCrossIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
