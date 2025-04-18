import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLibraIcon],svg[openmoji-libra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v48H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M12 12h48v48H12z"></svg:path><svg:path stroke-width="3" d="M30.53 39.5H20m32 0h-9.53m9.53 5H20m10.53-5a8.44 8.44 0 0 1-1.83-9.201a8.44 8.44 0 0 1 7.8-5.212a8.44 8.44 0 0 1 7.8 5.212a8.44 8.44 0 0 1-1.83 9.201"></svg:path></svg:g>`,
})
export class OpenmojiLibraIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
