import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKeycapAsteriskIcon],svg[openmoji-keycap-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11.875 12.166h48V60h-48z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.125 11.916h48v48h-48zm24 13v22M26.923 29.89l18.404 12.053m-18.415-.017l18.426-12.02"></svg:path>`,
})
export class OpenmojiKeycapAsteriskIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
